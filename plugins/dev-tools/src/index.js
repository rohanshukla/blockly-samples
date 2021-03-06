/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

import {DebugRenderer} from './debugRenderer';
import {generateFieldTestBlocks} from './generateFieldTestBlocks';
import {populateRandom} from './populateRandom';
import {downloadWorkspaceScreenshot} from './screenshot';
import {spaghetti} from './spaghetti';
import * as logger from './logger';
import * as testHelpers from './test_helpers.mocha';
import {onInit as toolboxTestBlocksInit, toolbox as toolboxTestBlocks} from './testblocks/';
import toolboxCategories from './toolboxCategories';
import toolboxSimple from './toolboxSimple';

let addGUIControls;
let addCodeEditor;
let createPlayground;
if (typeof window !== 'undefined') {
  addGUIControls = require('./addGUIControls').addGUIControls;
  addCodeEditor = require('./playground/monaco').addCodeEditor;
  createPlayground = require('./playground/').createPlayground;
}

// Export Blockly into the global namespace to make it easier to debug.
Blockly.utils.global.Blockly = Blockly;

export {
  addCodeEditor,
  addGUIControls,
  createPlayground,
  DebugRenderer,
  downloadWorkspaceScreenshot,
  generateFieldTestBlocks,
  populateRandom,
  logger,
  spaghetti,
  testHelpers,
  toolboxCategories,
  toolboxSimple,
  toolboxTestBlocks,
  toolboxTestBlocksInit,
};
