#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, '..', 'HomeReadyCA-Course-Content-REVISED.md');
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'lib', 'course-content.ts');

// Module configuration: id, lessonIdPrefix, lessonIds
const MODULE_CONFIG = [
  { id: 'start-here', lessonIds: ['start-here-1', 'start-here-2', 'start-here-3'] },
  { id: 'budget-buying-power', lessonIds: ['budget-1', 'budget-2', 'budget-3'] },
  { id: 'mortgage-basics', lessonIds: ['mortgage-1', 'mortgage-2', 'mortgage-3'] },
  { id: 'documents-underwriting', lessonIds: ['docs-1', 'docs-2', 'docs-3'] },
  { id: 'down-payment-assistance', lessonIds: ['dpa-1', 'dpa-2', 'dpa-3', 'dpa-4'] },
  { id: 'home-search-offers', lessonIds: ['search-1', 'search-2', 'search-3'] },
  { id: 'escrow-process', lessonIds: ['escrow-1', 'escrow-2', 'escrow-3', 'escrow-4'] },
  { id: 'inspections-negotiation', lessonIds: ['inspect-1', 'inspect-2', 'inspect-3'] },
  { id: 'insurance', lessonIds: ['insurance-1', 'insurance-2', 'insurance-3'] },
  { id: 'closing-first-30-days', lessonIds: ['closing-1', 'closing-2', 'closing-3'] },
];

const WORKSHEET_LESSON_IDS = new Set([
  'budget-3', 'mortgage-3', 'docs-2', 'docs-3',
  'search-3', 'escrow-4', 'inspect-3', 'insurance-2',
  'closing-2', 'closing-3',
]);

function main() {
  const markdown = fs.readFileSync(INPUT_FILE, 'utf-8');
  const lines = markdown.split('\n');

  // Parse modules and lessons
  const modules = [];
  let currentModule = null;
  let currentLesson = null;
  let lessonContentLines = [];

  function finishLesson() {
    if (currentLesson && currentModule) {
      let content = lessonContentLines.join('\n');
      // Remove leading/trailing --- separators and whitespace
      content = content.replace(/^(\s*---\s*\n)*/, '');
      content = content.replace(/(\n\s*---\s*)*\s*$/, '');
      content = content.trim();
      currentLesson.content = content;
      currentModule.lessons.push(currentLesson);
      currentLesson = null;
      lessonContentLines = [];
    }
  }

  function finishModule() {
    finishLesson();
    if (currentModule) {
      modules.push(currentModule);
      currentModule = null;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check for end-of-content markers
    if (/^\[Content continues/.test(line) || /^# END OF/.test(line) || /^# End of Course Content/.test(line)) {
      finishModule();
      break;
    }

    // Module header: # Module N: Title
    const moduleMatch = line.match(/^# Module (\d+): (.+)$/);
    if (moduleMatch) {
      finishModule();
      const moduleNumber = parseInt(moduleMatch[1], 10);
      const moduleTitle = moduleMatch[2].trim();

      // Next non-empty line should be the description in **bold**
      let description = '';
      for (let j = i + 1; j < lines.length; j++) {
        const nextLine = lines[j].trim();
        if (nextLine === '' || nextLine === '---') continue;
        const descMatch = nextLine.match(/^\*\*(.+?)\*\*$/);
        if (descMatch) {
          description = descMatch[1];
        }
        break;
      }

      currentModule = {
        number: moduleNumber,
        title: moduleTitle,
        description: description,
        lessons: [],
      };
      continue;
    }

    // Lesson header: ## Lesson N: Title
    const lessonMatch = line.match(/^## Lesson (\d+): (.+)$/);
    if (lessonMatch) {
      finishLesson();
      currentLesson = {
        title: lessonMatch[2].trim(),
        content: '',
      };
      lessonContentLines = [];
      continue;
    }

    // Accumulate lesson content
    if (currentLesson) {
      lessonContentLines.push(line);
    }
  }

  // Finish any remaining module/lesson
  finishModule();

  // Validate we got the right number of modules
  if (modules.length !== MODULE_CONFIG.length) {
    console.error(`Expected ${MODULE_CONFIG.length} modules, found ${modules.length}`);
    process.exit(1);
  }

  // Validate lesson counts match
  for (let i = 0; i < modules.length; i++) {
    const expected = MODULE_CONFIG[i].lessonIds.length;
    const actual = modules[i].lessons.length;
    if (actual !== expected) {
      console.error(`Module ${i} (${MODULE_CONFIG[i].id}): expected ${expected} lessons, found ${actual}`);
      process.exit(1);
    }
  }

  // Generate TypeScript output
  let output = '';

  output += `export interface Lesson {
  id: string;
  title: string;
  content: string;
  worksheetPlaceholder?: boolean;
}

export interface ModuleContent {
  id: string;
  number: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export const courseContent: ModuleContent[] = [\n`;

  for (let mi = 0; mi < modules.length; mi++) {
    const mod = modules[mi];
    const config = MODULE_CONFIG[mi];

    output += `  {\n`;
    output += `    id: '${config.id}',\n`;
    output += `    number: ${mod.number},\n`;
    output += `    title: '${escapeString(mod.title)}',\n`;
    output += `    description: '${escapeString(mod.description)}',\n`;
    output += `    lessons: [\n`;

    for (let li = 0; li < mod.lessons.length; li++) {
      const lesson = mod.lessons[li];
      const lessonId = config.lessonIds[li];
      const hasWorksheet = WORKSHEET_LESSON_IDS.has(lessonId);

      // Escape backticks in content for template literals
      const escapedContent = lesson.content.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

      output += `      {\n`;
      output += `        id: '${lessonId}',\n`;
      output += `        title: '${escapeString(lesson.title)}',\n`;
      output += `        content: \`${escapedContent}\`,\n`;
      if (hasWorksheet) {
        output += `        worksheetPlaceholder: true,\n`;
      }
      output += `      },\n`;
    }

    output += `    ],\n`;
    output += `  },\n`;
  }

  output += `];\n`;

  // Add utility functions
  output += `
export function getModuleContent(moduleId: string): ModuleContent | undefined {
  return courseContent.find((m) => m.id === moduleId);
}

export function getLesson(moduleId: string, lessonId: string): Lesson | undefined {
  const module = getModuleContent(moduleId);
  return module?.lessons.find((l) => l.id === lessonId);
}

export function getNextLesson(
  moduleId: string,
  currentLessonId: string
): { moduleId: string; lessonId: string } | null {
  const moduleIndex = courseContent.findIndex((m) => m.id === moduleId);
  if (moduleIndex === -1) return null;

  const module = courseContent[moduleIndex];
  const lessonIndex = module.lessons.findIndex((l) => l.id === currentLessonId);

  if (lessonIndex < module.lessons.length - 1) {
    return {
      moduleId,
      lessonId: module.lessons[lessonIndex + 1].id,
    };
  }

  if (moduleIndex < courseContent.length - 1) {
    const nextModule = courseContent[moduleIndex + 1];
    if (nextModule.lessons.length > 0) {
      return {
        moduleId: nextModule.id,
        lessonId: nextModule.lessons[0].id,
      };
    }
  }

  return null;
}

export function getPreviousLesson(
  moduleId: string,
  currentLessonId: string
): { moduleId: string; lessonId: string } | null {
  const moduleIndex = courseContent.findIndex((m) => m.id === moduleId);
  if (moduleIndex === -1) return null;

  const module = courseContent[moduleIndex];
  const lessonIndex = module.lessons.findIndex((l) => l.id === currentLessonId);

  if (lessonIndex > 0) {
    return {
      moduleId,
      lessonId: module.lessons[lessonIndex - 1].id,
    };
  }

  if (moduleIndex > 0) {
    const prevModule = courseContent[moduleIndex - 1];
    if (prevModule.lessons.length > 0) {
      return {
        moduleId: prevModule.id,
        lessonId: prevModule.lessons[prevModule.lessons.length - 1].id,
      };
    }
  }

  return null;
}

export function getAllLessonIds(): string[] {
  return courseContent.flatMap((m) => m.lessons.map((l) => l.id));
}

export function getModuleLessonIds(moduleId: string): string[] {
  const module = getModuleContent(moduleId);
  return module?.lessons.map((l) => l.id) || [];
}
`;

  fs.writeFileSync(OUTPUT_FILE, output, 'utf-8');
  console.log(`Successfully generated ${OUTPUT_FILE}`);
  console.log(`Modules: ${modules.length}`);
  for (let i = 0; i < modules.length; i++) {
    console.log(`  Module ${modules[i].number} (${MODULE_CONFIG[i].id}): ${modules[i].lessons.length} lessons`);
  }
}

function escapeString(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

main();
