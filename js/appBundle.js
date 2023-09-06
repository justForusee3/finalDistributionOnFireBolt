/**
 * App version: 1.0.0
 * SDK version: 5.4.1
 * CLI version: 2.12.0
 *
 * Generated: Wed, 06 Sep 2023 06:07:05 GMT
 */

var APP_com_domain_app_fireboltApp = (function () {
  'use strict';

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const settings$1 = {};
  const subscribers$1 = {};
  const initSettings$1 = (appSettings, platformSettings) => {
    settings$1['app'] = appSettings;
    settings$1['platform'] = platformSettings;
    settings$1['user'] = {};
  };
  const publish$1 = (key, value) => {
    subscribers$1[key] && subscribers$1[key].forEach(subscriber => subscriber(value));
  };
  const dotGrab$2 = function () {
    let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let key = arguments.length > 1 ? arguments[1] : undefined;
    if (obj === null) return undefined;
    const keys = key.split('.');
    for (let i = 0; i < keys.length; i++) {
      obj = obj[keys[i]] = obj[keys[i]] !== undefined ? obj[keys[i]] : {};
    }
    return typeof obj === 'object' && obj !== null ? Object.keys(obj).length ? obj : undefined : obj;
  };
  var Settings$2 = {
    get(type, key) {
      let fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      const val = dotGrab$2(settings$1[type], key);
      return val !== undefined ? val : fallback;
    },
    has(type, key) {
      return !!this.get(type, key);
    },
    set(key, value) {
      settings$1['user'][key] = value;
      publish$1(key, value);
    },
    subscribe(key, callback) {
      subscribers$1[key] = subscribers$1[key] || [];
      subscribers$1[key].push(callback);
    },
    unsubscribe(key, callback) {
      if (callback) {
        const index = subscribers$1[key] && subscribers$1[key].findIndex(cb => cb === callback);
        index > -1 && subscribers$1[key].splice(index, 1);
      } else {
        if (key in subscribers$1) {
          subscribers$1[key] = [];
        }
      }
    },
    clearSubscribers() {
      for (const key of Object.getOwnPropertyNames(subscribers$1)) {
        delete subscribers$1[key];
      }
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const prepLog = (type, args) => {
    const colors = {
      Info: 'green',
      Debug: 'gray',
      Warn: 'orange',
      Error: 'red'
    };
    args = Array.from(args);
    return ['%c' + (args.length > 1 && typeof args[0] === 'string' ? args.shift() : type), 'background-color: ' + colors[type] + '; color: white; padding: 2px 4px; border-radius: 2px', args];
  };
  var Log$1 = {
    info() {
      Settings$2.get('platform', 'log') && console.log.apply(console, prepLog('Info', arguments));
    },
    debug() {
      Settings$2.get('platform', 'log') && console.debug.apply(console, prepLog('Debug', arguments));
    },
    error() {
      Settings$2.get('platform', 'log') && console.error.apply(console, prepLog('Error', arguments));
    },
    warn() {
      Settings$2.get('platform', 'log') && console.warn.apply(console, prepLog('Warn', arguments));
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var Lightning$1 = window.lng;

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ColorShift extends Lightning$1.shaders.WebGLDefaultShader {
    set brightness(v) {
      this._brightness = (v - 50) / 100;
      this.redraw();
    }
    set contrast(v) {
      this._contrast = (v + 50) / 100;
      this.redraw();
    }
    set gamma(v) {
      this._gamma = (v + 50) / 100;
      this.redraw();
    }
    setupUniforms(operation) {
      super.setupUniforms(operation);
      const gl = this.gl;
      this._setUniform('colorAdjust', [this._brightness || 0.0, this._contrast || 1.0, this._gamma || 1.0], gl.uniform3fv);
    }
  }
  ColorShift.before = "\n    #ifdef GL_ES\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision lowp float;\n    # endif\n    #endif\n        \n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform vec3 colorAdjust;\n    \n    const mat3 RGBtoOpponentMat = mat3(0.2814, -0.0971, -0.0930, 0.6938, 0.1458,-0.2529, 0.0638, -0.0250, 0.4665);\n    const mat3 OpponentToRGBMat = mat3(1.1677, 0.9014, 0.7214, -6.4315, 2.5970, 0.1257, -0.5044, 0.0159, 2.0517);    \n";
  ColorShift.after = "    \n    vec3 brightnessContrast(vec3 value, float brightness, float contrast)\n    {\n        return (value - 0.5) * contrast + 0.5 + brightness;\n    }   \n    \n    vec3 updateGamma(vec3 value, float param)\n    {\n        return vec3(pow(abs(value.r), param),pow(abs(value.g), param),pow(abs(value.b), param));\n    } \n       \n    void main(void){\n        vec4 fragColor = texture2D(uSampler, vTextureCoord);        \n        vec4 color = filter(fragColor) * vColor;       \n        \n        vec3 bc = brightnessContrast(color.rgb,colorAdjust[0],colorAdjust[1]);        \n        vec3 ga = updateGamma(bc.rgb, colorAdjust[2]);  \n              \n        gl_FragColor = vec4(ga.rgb, color.a);          \n    }    \n";

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ProtanopiaShader extends ColorShift {}
  ProtanopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.20,  0.99, -0.19, 0.0);\n        vec4 g = vec4( 0.16,  0.79,  0.04, 0.0);\n        vec4 b = vec4( 0.01, -0.01,  1.00, 0.0);\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }\n    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));      \n    }    \n    ").concat(ColorShift.after, " \n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class DeuteranopiaShader extends ColorShift {}
  DeuteranopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.43,  0.72, -0.15, 0.0 );\n        vec4 g = vec4( 0.34,  0.57,  0.09, 0.0 );\n        vec4 b = vec4(-0.02,  0.03,  1.00, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }\n       \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));    \n    }\n    ").concat(ColorShift.after, "    \n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class TritanopiaShader extends ColorShift {}
  TritanopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.97,  0.11, -0.08, 0.0 );\n        vec4 g = vec4( 0.02,  0.82,  0.16, 0.0 );\n        vec4 b = vec4(-0.06,  0.88,  0.18, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }   \n    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= ((3.0 * opponentColor.z) - opponentColor.y) * 0.25;\n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));\n    }   \n    ").concat(ColorShift.after, " \n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class NeutralShader extends ColorShift {}
  NeutralShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {\n        return color;\n    }\n    ").concat(ColorShift.after, "\n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class MonochromacyShader extends ColorShift {}
  MonochromacyShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {   \n        float grey = dot(color.rgb, vec3(0.299, 0.587, 0.114));\n        return vec4(vec3(grey, grey, grey), 1.0 ); \n    }\n    ").concat(ColorShift.after, "\n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const colorshiftShader = type => {
    const shadersMap = {
      normal: NeutralShader,
      monochromacy: MonochromacyShader,
      deuteranopia: DeuteranopiaShader,
      tritanopia: TritanopiaShader,
      protanopia: ProtanopiaShader
    };
    type = typeof type === 'string' && type.toLowerCase() || null;
    return Object.keys(shadersMap).indexOf(type) > -1 ? shadersMap[type] : false;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /* global SpeechSynthesisErrorEvent */
  function flattenStrings() {
    let series = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    const flattenedSeries = [];
    for (var i = 0; i < series.length; i++) {
      if (typeof series[i] === 'string' && !series[i].includes('PAUSE-')) {
        flattenedSeries.push(series[i]);
      } else {
        break;
      }
    }
    // add a "word boundary" to ensure the Announcer doesn't automatically try to
    // interpret strings that look like dates but are not actually dates
    // for example, if "Rising Sun" and "1993" are meant to be two separate lines,
    // when read together, "Sun 1993" is interpretted as "Sunday 1993"
    return [flattenedSeries.join(',\b ')].concat(series.slice(i));
  }
  function delay(pause) {
    return new Promise(resolve => {
      setTimeout(resolve, pause);
    });
  }

  /**
   * Speak a string
   *
   * @param {string} phrase Phrase to speak
   * @param {SpeechSynthesisUtterance[]} utterances An array which the new SpeechSynthesisUtterance instance representing this utterance will be appended
   * @return {Promise<void>} Promise resolved when the utterance has finished speaking, and rejected if there's an error
   */
  function speak(phrase, utterances) {
    let lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';
    const synth = window.speechSynthesis;
    return new Promise((resolve, reject) => {
      const utterance = new SpeechSynthesisUtterance(phrase);
      utterance.lang = lang;
      utterance.onend = () => {
        resolve();
      };
      utterance.onerror = e => {
        reject(e);
      };
      utterances.push(utterance);
      synth.speak(utterance);
    });
  }
  function speakSeries(series, lang) {
    let root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    const synth = window.speechSynthesis;
    const remainingPhrases = flattenStrings(Array.isArray(series) ? series : [series]);
    const nestedSeriesResults = [];
    /*
      We hold this array of SpeechSynthesisUtterances in order to prevent them from being
      garbage collected prematurely on STB hardware which can cause the 'onend' events of
      utterances to not fire consistently.
    */
    const utterances = [];
    let active = true;
    const seriesChain = (async () => {
      try {
        while (active && remainingPhrases.length) {
          const phrase = await Promise.resolve(remainingPhrases.shift());
          if (!active) {
            // Exit
            // Need to check this after the await in case it was cancelled in between
            break;
          } else if (typeof phrase === 'string' && phrase.includes('PAUSE-')) {
            // Pause it
            let pause = phrase.split('PAUSE-')[1] * 1000;
            if (isNaN(pause)) {
              pause = 0;
            }
            await delay(pause);
          } else if (typeof phrase === 'string' && phrase.length) {
            // Speak it
            const totalRetries = 3;
            let retriesLeft = totalRetries;
            while (active && retriesLeft > 0) {
              try {
                await speak(phrase, utterances, lang);
                retriesLeft = 0;
              } catch (e) {
                // eslint-disable-next-line no-undef
                if (e instanceof SpeechSynthesisErrorEvent) {
                  if (e.error === 'network') {
                    retriesLeft--;
                    console.warn("Speech synthesis network error. Retries left: ".concat(retriesLeft));
                    await delay(500 * (totalRetries - retriesLeft));
                  } else if (e.error === 'canceled' || e.error === 'interrupted') {
                    // Cancel or interrupt error (ignore)
                    retriesLeft = 0;
                  } else {
                    throw new Error("SpeechSynthesisErrorEvent: ".concat(e.error));
                  }
                } else {
                  throw e;
                }
              }
            }
          } else if (typeof phrase === 'function') {
            const seriesResult = speakSeries(phrase(), lang, false);
            nestedSeriesResults.push(seriesResult);
            await seriesResult.series;
          } else if (Array.isArray(phrase)) {
            // Speak it (recursively)
            const seriesResult = speakSeries(phrase, lang, false);
            nestedSeriesResults.push(seriesResult);
            await seriesResult.series;
          }
        }
      } finally {
        active = false;
      }
    })();
    return {
      series: seriesChain,
      get active() {
        return active;
      },
      append: toSpeak => {
        remainingPhrases.push(toSpeak);
      },
      cancel: () => {
        if (!active) {
          return;
        }
        if (root) {
          synth.cancel();
        }
        nestedSeriesResults.forEach(nestedSeriesResults => {
          nestedSeriesResults.cancel();
        });
        active = false;
      }
    };
  }
  let currentSeries;
  function SpeechEngine (toSpeak, lang) {
    currentSeries && currentSeries.cancel();
    currentSeries = speakSeries(toSpeak, lang);
    return currentSeries;
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * Code from: https://github.com/jashkenas/underscore is
   * Copyright (c) 2009-2022 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
   * Licensed under the MIT License based off:
   * http://unscriptable.com/2009/03/20/debouncing-javascript-methods/ which is:
   * Copyright (c) 2007-2009 unscriptable.com and John M. Hann
   * Licensed under the MIT License (with X11 advertising exception)
   */

  function getElmName(elm) {
    return elm.ref || elm.constructor.name;
  }

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing. The function also has a property 'clear'
   * that is a function which will clear the timer to prevent previously scheduled executions.
   *
   * @source underscore.js
   * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
   * @param {Function} function to wrap
   * @param {Number} timeout in ms (`100`)
   * @param {Boolean} whether to execute at the beginning (`false`)
   * @api public
   */
  function debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    if (null == wait) wait = 100;
    function later() {
      var last = Date.now() - timestamp;
      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    }
    var debounced = function () {
      context = this;
      args = arguments;
      timestamp = Date.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }
      return result;
    };
    debounced.clear = function () {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };
    debounced.flush = function () {
      if (timeout) {
        result = func.apply(context, args);
        context = args = null;
        clearTimeout(timeout);
        timeout = null;
      }
    };
    return debounced;
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let resetFocusPathTimer;
  let prevFocusPath = [];
  let currentlySpeaking;
  let voiceOutDisabled = false;
  const fiveMinutes = 300000;
  function onFocusChangeCore() {
    let focusPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (!Announcer.enabled) {
      return;
    }
    const loaded = focusPath.every(elm => !elm.loading);
    const focusDiff = focusPath.filter(elm => !prevFocusPath.includes(elm));
    resetFocusPathTimer();
    if (!loaded) {
      Announcer.onFocusChange();
      return;
    }
    prevFocusPath = focusPath.slice(0);
    let toAnnounceText = [];
    let toAnnounce = focusDiff.reduce((acc, elm) => {
      if (elm.announce) {
        acc.push([getElmName(elm), 'Announce', elm.announce]);
        toAnnounceText.push(elm.announce);
      } else if (elm.title) {
        acc.push([getElmName(elm), 'Title', elm.title]);
        toAnnounceText.push(elm.title);
      }
      return acc;
    }, []);
    focusDiff.reverse().reduce((acc, elm) => {
      if (elm.announceContext) {
        acc.push([getElmName(elm), 'Context', elm.announceContext]);
        toAnnounceText.push(elm.announceContext);
      } else {
        acc.push([getElmName(elm), 'No Context', '']);
      }
      return acc;
    }, toAnnounce);
    if (Announcer.debug) {
      console.table(toAnnounce);
    }
    if (toAnnounceText.length) {
      return Announcer.speak(toAnnounceText.reduce((acc, val) => acc.concat(val), []));
    }
  }
  function textToSpeech(toSpeak) {
    if (voiceOutDisabled) {
      return;
    }
    return currentlySpeaking = SpeechEngine(toSpeak);
  }
  const Announcer = {
    enabled: true,
    debug: false,
    cancel: function () {
      currentlySpeaking && currentlySpeaking.cancel();
    },
    clearPrevFocus: function () {
      let depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      prevFocusPath = prevFocusPath.slice(0, depth);
      resetFocusPathTimer();
    },
    speak: function (text) {
      let {
        append = false,
        notification = false
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (Announcer.enabled) {
        Announcer.onFocusChange.flush();
        if (append && currentlySpeaking && currentlySpeaking.active) {
          currentlySpeaking.append(text);
        } else {
          Announcer.cancel();
          textToSpeech(text);
        }
        if (notification) {
          voiceOutDisabled = true;
          currentlySpeaking.series.finally(() => {
            voiceOutDisabled = false;
            Announcer.refresh();
          });
        }
      }
      return currentlySpeaking;
    },
    setupTimers: function () {
      let {
        focusDebounce = 400,
        focusChangeTimeout = fiveMinutes
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Announcer.onFocusChange = debounce(onFocusChangeCore, focusDebounce);
      resetFocusPathTimer = debounce(() => {
        // Reset focus path for full announce
        prevFocusPath = [];
      }, focusChangeTimeout);
    }
  };
  Announcer.setupTimers();

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var Accessibility = {
    Announcer,
    colorshift(component) {
      let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      let config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        brightness: 50,
        contrast: 50,
        gamma: 50
      };
      config = {
        ...{
          brightness: 50,
          contrast: 50,
          gamma: 50
        },
        ...config
      };
      const shader = type && colorshiftShader(type);
      if (shader) {
        Log$1.info('Accessibility Colorshift', type, config);
        component.rtt = true;
        component.shader = {
          type: shader,
          ...config
        };
      } else {
        Log$1.info('Accessibility Colorshift', 'Disabled');
        component.rtt = false;
        component.shader = null;
      }
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  let Log;
  let Settings$1;
  let ApplicationInstance$1;
  let Ads$1;
  let Lightning;
  const initLightningSdkPlugin = {
    set log(v) {
      Log = v;
    },
    set settings(v) {
      Settings$1 = v;
    },
    set ads(v) {
      Ads$1 = v;
    },
    set lightning(v) {
      Lightning = v;
    },
    set appInstance(v) {
      ApplicationInstance$1 = v;
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initMetrics = config => {
    sendMetric = config.sendMetric;
  };
  let sendMetric = (type, event, params) => {
    Log.info('Sending metric', type, event, params);
  };

  // available metric per category
  const metrics$1 = {
    app: ['launch', 'loaded', 'ready', 'close'],
    page: ['view', 'leave'],
    user: ['click', 'input'],
    media: ['abort', 'canplay', 'ended', 'pause', 'play',
    // with some videos there occur almost constant suspend events ... should investigate
    // 'suspend',
    'volumechange', 'waiting', 'seeking', 'seeked']
  };

  // error metric function (added to each category)
  const errorMetric = function (type, message, code, visible) {
    let params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    params = {
      params,
      ...{
        message,
        code,
        visible
      }
    };
    sendMetric(type, 'error', params);
  };
  const Metric = function (type, events) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return events.reduce((obj, event) => {
      obj[event] = function (name) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        params = {
          ...options,
          ...(name ? {
            name
          } : {}),
          ...params
        };
        sendMetric(type, event, params);
      };
      return obj;
    }, {
      error(message, code, params) {
        errorMetric(type, message, code, params);
      },
      event(name, params) {
        sendMetric(type, name, params);
      }
    });
  };
  const Metrics$1 = types => {
    return Object.keys(types).reduce((obj, type) => {
      // media metric works a bit different!
      // it's a function that accepts a url and returns an object with the available metrics
      // url is automatically passed as a param in every metric
      type === 'media' ? obj[type] = url => Metric(type, types[type], {
        url
      }) : obj[type] = Metric(type, types[type]);
      return obj;
    }, {
      error: errorMetric,
      event: sendMetric
    });
  };
  var Metrics$2 = Metrics$1(metrics$1);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const formatLocale = locale => {
    if (locale && locale.length === 2) {
      return "".concat(locale.toLowerCase(), "-").concat(locale.toUpperCase());
    } else {
      return locale;
    }
  };
  const getLocale = defaultValue => {
    if ('language' in navigator) {
      const locale = formatLocale(navigator.language);
      return Promise.resolve(locale);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  const getLanguage = defaultValue => {
    if ('language' in navigator) {
      const language = formatLocale(navigator.language).slice(0, 2);
      return Promise.resolve(language);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  const getCountryCode = defaultValue => {
    if ('language' in navigator) {
      const countryCode = formatLocale(navigator.language).slice(3, 5);
      return Promise.resolve(countryCode);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  const hasOrAskForGeoLocationPermission = () => {
    return new Promise(resolve => {
      // force to prompt for location permission
      if (Settings$1.get('platform', 'forceBrowserGeolocation') === true) resolve(true);
      if ('permissions' in navigator && typeof navigator.permissions.query === 'function') {
        navigator.permissions.query({
          name: 'geolocation'
        }).then(status => {
          resolve(status.state === 'granted' || status.status === 'granted');
        });
      } else {
        resolve(false);
      }
    });
  };
  const getLatLon = defaultValue => {
    return new Promise(resolve => {
      hasOrAskForGeoLocationPermission().then(granted => {
        if (granted === true) {
          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
            // success
            result => result && result.coords && resolve([result.coords.latitude, result.coords.longitude]),
            // error
            () => resolve(defaultValue),
            // options
            {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0
            });
          } else {
            return queryForLatLon().then(result => resolve(result || defaultValue));
          }
        } else {
          return queryForLatLon().then(result => resolve(result || defaultValue));
        }
      });
    });
  };
  const queryForLatLon = () => {
    return new Promise(resolve => {
      fetch('https://geolocation-db.com/json/').then(response => response.json()).then(_ref => {
        let {
          latitude,
          longitude
        } = _ref;
        return latitude && longitude ? resolve([latitude, longitude]) : resolve(false);
      }).catch(() => resolve(false));
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const defaultProfile = {
    ageRating: 'adult',
    city: 'New York',
    zipCode: '27505',
    countryCode: () => getCountryCode('US'),
    ip: '127.0.0.1',
    household: 'b2244e9d4c04826ccd5a7b2c2a50e7d4',
    language: () => getLanguage('en'),
    latlon: () => getLatLon([40.7128, 74.006]),
    locale: () => getLocale('en-US'),
    mac: '00:00:00:00:00:00',
    operator: 'metrological',
    platform: 'metrological',
    packages: [],
    uid: 'ee6723b8-7ab3-462c-8d93-dbf61227998e',
    stbType: 'metrological'
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let getInfo = key => {
    const profile = {
      ...defaultProfile,
      ...Settings$1.get('platform', 'profile')
    };
    return Promise.resolve(typeof profile[key] === 'function' ? profile[key]() : profile[key]);
  };
  let setInfo = (key, params) => {
    if (key in defaultProfile) return defaultProfile[key] = params;
  };
  const initProfile = config => {
    getInfo = config.getInfo ? config.getInfo : getInfo;
    setInfo = config.setInfo ? config.setInfo : setInfo;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initPurchase = config => {
    if (config.billingUrl) config.billingUrl;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const defaultChannels = [{
    number: 1,
    name: 'Metro News 1',
    description: 'New York Cable News Channel',
    entitled: true,
    program: {
      title: 'The Morning Show',
      description: "New York's best morning show",
      startTime: new Date(new Date() - 60 * 5 * 1000).toUTCString(),
      // started 5 minutes ago
      duration: 60 * 30,
      // 30 minutes
      ageRating: 0
    }
  }, {
    number: 2,
    name: 'MTV',
    description: 'Music Television',
    entitled: true,
    program: {
      title: 'Beavis and Butthead',
      description: 'American adult animated sitcom created by Mike Judge',
      startTime: new Date(new Date() - 60 * 20 * 1000).toUTCString(),
      // started 20 minutes ago
      duration: 60 * 45,
      // 45 minutes
      ageRating: 18
    }
  }, {
    number: 3,
    name: 'NBC',
    description: 'NBC TV Network',
    entitled: false,
    program: {
      title: 'The Tonight Show Starring Jimmy Fallon',
      description: 'Late-night talk show hosted by Jimmy Fallon on NBC',
      startTime: new Date(new Date() - 60 * 10 * 1000).toUTCString(),
      // started 10 minutes ago
      duration: 60 * 60,
      // 1 hour
      ageRating: 10
    }
  }];
  const channels = () => Settings$1.get('platform', 'tv', defaultChannels);
  const randomChannel = () => channels()[~~(channels.length * Math.random())];

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let currentChannel;
  const callbacks = {};
  const emit$3 = function (event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    callbacks[event] && callbacks[event].forEach(cb => {
      cb.apply(null, args);
    });
  };

  // local mock methods
  let methods = {
    getChannel() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise((resolve, reject) => {
        if (currentChannel) {
          const channel = {
            ...currentChannel
          };
          delete channel.program;
          resolve(channel);
        } else {
          reject('No channel found');
        }
      });
    },
    getProgram() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise((resolve, reject) => {
        currentChannel.program ? resolve(currentChannel.program) : reject('No program found');
      });
    },
    setChannel(number) {
      return new Promise((resolve, reject) => {
        if (number) {
          const newChannel = channels().find(c => c.number === number);
          if (newChannel) {
            currentChannel = newChannel;
            const channel = {
              ...currentChannel
            };
            delete channel.program;
            emit$3('channelChange', channel);
            resolve(channel);
          } else {
            reject('Channel not found');
          }
        } else {
          reject('No channel number supplied');
        }
      });
    }
  };
  const initTV = config => {
    methods = {};
    if (config.getChannel && typeof config.getChannel === 'function') {
      methods.getChannel = config.getChannel;
    }
    if (config.getProgram && typeof config.getProgram === 'function') {
      methods.getProgram = config.getProgram;
    }
    if (config.setChannel && typeof config.setChannel === 'function') {
      methods.setChannel = config.setChannel;
    }
    if (config.emit && typeof config.emit === 'function') {
      config.emit(emit$3);
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initPin = config => {
    if (config.submit && typeof config.submit === 'function') {
      config.submit;
    }
    if (config.check && typeof config.check === 'function') {
      config.check;
    }
  };

  var executeAsPromise = (function (method) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    let result;
    if (method && typeof method === 'function') {
      try {
        result = method.apply(context, args);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }

    // if it looks like a duck .. ehm ... promise and talks like a promise, let's assume it's a promise
    if (result !== null && typeof result === 'object' && result.then && typeof result.then === 'function') {
      return result;
    }
    // otherwise make it into a promise
    else {
      return new Promise((resolve, reject) => {
        if (result instanceof Error) {
          reject(result);
        } else {
          resolve(result);
        }
      });
    }
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var events$1 = {
    abort: 'Abort',
    canplay: 'CanPlay',
    canplaythrough: 'CanPlayThrough',
    durationchange: 'DurationChange',
    emptied: 'Emptied',
    encrypted: 'Encrypted',
    ended: 'Ended',
    error: 'Error',
    interruptbegin: 'InterruptBegin',
    interruptend: 'InterruptEnd',
    loadeddata: 'LoadedData',
    loadedmetadata: 'LoadedMetadata',
    loadstart: 'LoadStart',
    pause: 'Pause',
    play: 'Play',
    playing: 'Playing',
    progress: 'Progress',
    ratechange: 'Ratechange',
    seeked: 'Seeked',
    seeking: 'Seeking',
    stalled: 'Stalled',
    // suspend: 'Suspend', // this one is called a looooot for some videos
    timeupdate: 'TimeUpdate',
    volumechange: 'VolumeChange',
    waiting: 'Waiting'
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var autoSetupMixin = (function (sourceObject) {
    let setup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => {};
    let ready = false;
    const doSetup = () => {
      if (ready === false) {
        setup();
        ready = true;
      }
    };
    return Object.keys(sourceObject).reduce((obj, key) => {
      if (typeof sourceObject[key] === 'function') {
        obj[key] = function () {
          doSetup();
          return sourceObject[key].apply(sourceObject, arguments);
        };
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).get === 'function') {
        obj.__defineGetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).get.apply(sourceObject);
        });
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).set === 'function') {
        obj.__defineSetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).set.sourceObject[key].apply(sourceObject, arguments);
        });
      } else {
        obj[key] = sourceObject[key];
      }
      return obj;
    }, {});
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  let timeout = null;
  var easeExecution = ((cb, delay) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb();
    }, delay);
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var VideoTexture = (() => {
    return class VideoTexture extends Lightning.Component {
      static _template() {
        return {
          Video: {
            alpha: 1,
            visible: false,
            pivot: 0.5,
            texture: {
              type: Lightning.textures.StaticTexture,
              options: {}
            }
          }
        };
      }
      set videoEl(v) {
        this._videoEl = v;
      }
      get videoEl() {
        return this._videoEl;
      }
      get videoView() {
        return this.tag('Video');
      }
      get videoTexture() {
        return this.videoView.texture;
      }
      get isVisible() {
        return this.videoView.alpha === 1 && this.videoView.visible === true;
      }
      _init() {
        this._createVideoTexture();
      }
      _createVideoTexture() {
        const stage = this.stage;
        const gl = stage.gl;
        const glTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        this.videoTexture.options = {
          source: glTexture,
          w: this.videoEl.width,
          h: this.videoEl.height
        };
        this.videoView.w = this.videoEl.width / this.stage.getRenderPrecision();
        this.videoView.h = this.videoEl.height / this.stage.getRenderPrecision();
      }
      start() {
        const stage = this.stage;
        this._lastTime = 0;
        if (!this._updateVideoTexture) {
          this._updateVideoTexture = () => {
            if (this.videoTexture.options.source && this.videoEl.videoWidth && this.active) {
              const gl = stage.gl;
              const currentTime = new Date().getTime();
              const getVideoPlaybackQuality = this.videoEl.getVideoPlaybackQuality();

              // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
              // We'll fallback to fixed 30fps in this case.
              // As 'webkitDecodedFrameCount' is about to deprecate, check for the 'totalVideoFrames'
              const frameCount = getVideoPlaybackQuality ? getVideoPlaybackQuality.totalVideoFrames : this.videoEl.webkitDecodedFrameCount;
              const mustUpdate = frameCount ? this._lastFrame !== frameCount : this._lastTime < currentTime - 30;
              if (mustUpdate) {
                this._lastTime = currentTime;
                this._lastFrame = frameCount;
                try {
                  gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.videoEl);
                  this._lastFrame = this.videoEl.webkitDecodedFrameCount;
                  this.videoView.visible = true;
                  this.videoTexture.options.w = this.videoEl.width;
                  this.videoTexture.options.h = this.videoEl.height;
                  const expectedAspectRatio = this.videoView.w / this.videoView.h;
                  const realAspectRatio = this.videoEl.width / this.videoEl.height;
                  if (expectedAspectRatio > realAspectRatio) {
                    this.videoView.scaleX = realAspectRatio / expectedAspectRatio;
                    this.videoView.scaleY = 1;
                  } else {
                    this.videoView.scaleY = expectedAspectRatio / realAspectRatio;
                    this.videoView.scaleX = 1;
                  }
                } catch (e) {
                  Log.error('texImage2d video', e);
                  this.stop();
                }
                this.videoTexture.source.forceRenderUpdate();
              }
            }
          };
        }
        if (!this._updatingVideoTexture) {
          stage.on('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = true;
        }
      }
      stop() {
        const stage = this.stage;
        stage.removeListener('frameStart', this._updateVideoTexture);
        this._updatingVideoTexture = false;
        this.videoView.visible = false;
        if (this.videoTexture.options.source) {
          const gl = stage.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
      position(top, left) {
        this.videoView.patch({
          smooth: {
            x: left,
            y: top
          }
        });
      }
      size(width, height) {
        this.videoView.patch({
          smooth: {
            w: width,
            h: height
          }
        });
      }
      show() {
        this.videoView.setSmooth('alpha', 1);
      }
      hide() {
        this.videoView.setSmooth('alpha', 0);
      }
    };
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let mediaUrl$1 = url => url;
  let videoEl;
  let videoTexture;
  let metrics;
  let consumer$1;
  let precision = 1;
  let textureMode = false;
  const initVideoPlayer = config => {
    if (config.mediaUrl) {
      mediaUrl$1 = config.mediaUrl;
    }
  };
  // todo: add this in a 'Registry' plugin
  // to be able to always clean this up on app close
  let eventHandlers = {};
  const state$1 = {
    adsEnabled: false,
    playing: false,
    _playingAds: false,
    get playingAds() {
      return this._playingAds;
    },
    set playingAds(val) {
      if (this._playingAds !== val) {
        this._playingAds = val;
        fireOnConsumer$1(val === true ? 'AdStart' : 'AdEnd');
      }
    },
    skipTime: false,
    playAfterSeek: null
  };
  const hooks = {
    play() {
      state$1.playing = true;
    },
    pause() {
      state$1.playing = false;
    },
    seeked() {
      state$1.playAfterSeek === true && videoPlayerPlugin.play();
      state$1.playAfterSeek = null;
    },
    abort() {
      deregisterEventListeners();
    }
  };
  const withPrecision = val => Math.round(precision * val) + 'px';
  const fireOnConsumer$1 = (event, args) => {
    if (consumer$1) {
      consumer$1.fire('$videoPlayer' + event, args, videoEl.currentTime);
      consumer$1.fire('$videoPlayerEvent', event, args, videoEl.currentTime);
    }
  };
  const fireHook = (event, args) => {
    hooks[event] && typeof hooks[event] === 'function' && hooks[event].call(null, event, args);
  };
  let customLoader = null;
  let customUnloader = null;
  const loader$1 = (url, videoEl, config) => {
    return customLoader && typeof customLoader === 'function' ? customLoader(url, videoEl, config) : new Promise(resolve => {
      url = mediaUrl$1(url);
      videoEl.setAttribute('src', url);
      videoEl.load();
      resolve();
    });
  };
  const unloader = videoEl => {
    return customUnloader && typeof customUnloader === 'function' ? customUnloader(videoEl) : new Promise(resolve => {
      videoEl.removeAttribute('src');
      videoEl.load();
      resolve();
    });
  };
  const setupVideoTag = () => {
    const videoEls = document.getElementsByTagName('video');
    if (videoEls && videoEls.length) {
      return videoEls[0];
    } else {
      const videoEl = document.createElement('video');
      const platformSettingsWidth = Settings$1.get('platform', 'width') ? Settings$1.get('platform', 'width') : 1920;
      const platformSettingsHeight = Settings$1.get('platform', 'height') ? Settings$1.get('platform', 'height') : 1080;
      videoEl.setAttribute('id', 'video-player');
      videoEl.setAttribute('width', withPrecision(platformSettingsWidth));
      videoEl.setAttribute('height', withPrecision(platformSettingsHeight));
      videoEl.style.position = 'absolute';
      videoEl.style.zIndex = '1';
      videoEl.style.display = 'none';
      videoEl.style.visibility = 'hidden';
      videoEl.style.top = withPrecision(0);
      videoEl.style.left = withPrecision(0);
      videoEl.style.width = withPrecision(platformSettingsWidth);
      videoEl.style.height = withPrecision(platformSettingsHeight);
      document.body.appendChild(videoEl);
      return videoEl;
    }
  };
  const setUpVideoTexture = () => {
    if (!ApplicationInstance$1.tag('VideoTexture')) {
      const el = ApplicationInstance$1.stage.c({
        type: VideoTexture(),
        ref: 'VideoTexture',
        zIndex: 0,
        videoEl
      });
      ApplicationInstance$1.childList.addAt(el, 0);
    }
    return ApplicationInstance$1.tag('VideoTexture');
  };
  const registerEventListeners = () => {
    Log.info('VideoPlayer', 'Registering event listeners');
    Object.keys(events$1).forEach(event => {
      const handler = e => {
        // Fire a metric for each event (if it exists on the metrics object)
        if (metrics && metrics[event] && typeof metrics[event] === 'function') {
          metrics[event]({
            currentTime: videoEl.currentTime
          });
        }
        // fire an internal hook
        fireHook(event, {
          videoElement: videoEl,
          event: e
        });

        // fire the event (with human friendly event name) to the consumer of the VideoPlayer
        fireOnConsumer$1(events$1[event], {
          videoElement: videoEl,
          event: e
        });
      };
      eventHandlers[event] = handler;
      videoEl.addEventListener(event, handler);
    });
  };
  const deregisterEventListeners = () => {
    Log.info('VideoPlayer', 'Deregistering event listeners');
    Object.keys(eventHandlers).forEach(event => {
      videoEl.removeEventListener(event, eventHandlers[event]);
    });
    eventHandlers = {};
  };
  const videoPlayerPlugin = {
    consumer(component) {
      consumer$1 = component;
    },
    loader(loaderFn) {
      customLoader = loaderFn;
    },
    unloader(unloaderFn) {
      customUnloader = unloaderFn;
    },
    position() {
      let top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      videoEl.style.left = withPrecision(left);
      videoEl.style.top = withPrecision(top);
      if (textureMode === true) {
        videoTexture.position(top, left);
      }
    },
    size() {
      let width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1920;
      let height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1080;
      videoEl.style.width = withPrecision(width);
      videoEl.style.height = withPrecision(height);
      videoEl.width = parseFloat(videoEl.style.width);
      videoEl.height = parseFloat(videoEl.style.height);
      if (textureMode === true) {
        videoTexture.size(width, height);
      }
    },
    area() {
      let top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1920;
      let bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1080;
      let left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.position(top, left);
      this.size(right - left, bottom - top);
    },
    open(url) {
      let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.canInteract) return;
      metrics = Metrics$2.media(url);
      this.hide();
      deregisterEventListeners();
      if (this.src == url) {
        this.clear().then(this.open(url, config));
      } else {
        const adConfig = {
          enabled: state$1.adsEnabled,
          duration: 300
        };
        if (config.videoId) {
          adConfig.caid = config.videoId;
        }
        Ads$1.get(adConfig, consumer$1).then(ads => {
          state$1.playingAds = true;
          ads.prerolls().then(() => {
            state$1.playingAds = false;
            loader$1(url, videoEl, config).then(() => {
              registerEventListeners();
              this.show();
              this.play();
            }).catch(e => {
              fireOnConsumer$1('error', {
                videoElement: videoEl,
                event: e
              });
            });
          });
        });
      }
    },
    reload() {
      if (!this.canInteract) return;
      const url = videoEl.getAttribute('src');
      this.close();
      this.open(url);
    },
    close() {
      Ads$1.cancel();
      if (state$1.playingAds) {
        state$1.playingAds = false;
        Ads$1.stop();
        // call self in next tick
        setTimeout(() => {
          this.close();
        });
      }
      if (!this.canInteract) return;
      this.clear();
      this.hide();
      deregisterEventListeners();
    },
    clear() {
      if (!this.canInteract) return;
      // pause the video first to disable sound
      this.pause();
      if (textureMode === true) videoTexture.stop();
      return unloader(videoEl).then(() => {
        fireOnConsumer$1('Clear', {
          videoElement: videoEl
        });
      });
    },
    play() {
      if (!this.canInteract) return;
      if (textureMode === true) videoTexture.start();
      executeAsPromise(videoEl.play, null, videoEl).catch(e => {
        fireOnConsumer$1('error', {
          videoElement: videoEl,
          event: e
        });
      });
    },
    pause() {
      if (!this.canInteract) return;
      videoEl.pause();
    },
    playPause() {
      if (!this.canInteract) return;
      this.playing === true ? this.pause() : this.play();
    },
    mute() {
      let muted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!this.canInteract) return;
      videoEl.muted = muted;
    },
    loop() {
      let looped = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      videoEl.loop = looped;
    },
    seek(time) {
      if (!this.canInteract) return;
      if (!this.src) return;
      // define whether should continue to play after seek is complete (in seeked hook)
      if (state$1.playAfterSeek === null) {
        state$1.playAfterSeek = !!state$1.playing;
      }
      // pause before actually seeking
      this.pause();
      // currentTime always between 0 and the duration of the video (minus 0.1s to not set to the final frame and stall the video)
      videoEl.currentTime = Math.max(0, Math.min(time, this.duration - 0.1));
    },
    skip(seconds) {
      if (!this.canInteract) return;
      if (!this.src) return;
      state$1.skipTime = (state$1.skipTime || videoEl.currentTime) + seconds;
      easeExecution(() => {
        this.seek(state$1.skipTime);
        state$1.skipTime = false;
      }, 300);
    },
    show() {
      if (!this.canInteract) return;
      if (textureMode === true) {
        videoTexture.show();
      } else {
        videoEl.style.display = 'block';
        videoEl.style.visibility = 'visible';
      }
    },
    hide() {
      if (!this.canInteract) return;
      if (textureMode === true) {
        videoTexture.hide();
      } else {
        videoEl.style.display = 'none';
        videoEl.style.visibility = 'hidden';
      }
    },
    enableAds() {
      let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      state$1.adsEnabled = enabled;
    },
    /* Public getters */
    get duration() {
      return videoEl && (isNaN(videoEl.duration) ? Infinity : videoEl.duration);
    },
    get currentTime() {
      return videoEl && videoEl.currentTime;
    },
    get muted() {
      return videoEl && videoEl.muted;
    },
    get looped() {
      return videoEl && videoEl.loop;
    },
    get src() {
      return videoEl && videoEl.getAttribute('src');
    },
    get playing() {
      return state$1.playing;
    },
    get playingAds() {
      return state$1.playingAds;
    },
    get canInteract() {
      // todo: perhaps add an extra flag wether we allow interactions (i.e. pauze, mute, etc.) during ad playback
      return state$1.playingAds === false;
    },
    get top() {
      return videoEl && parseFloat(videoEl.style.top);
    },
    get left() {
      return videoEl && parseFloat(videoEl.style.left);
    },
    get bottom() {
      return videoEl && parseFloat(videoEl.style.top - videoEl.style.height);
    },
    get right() {
      return videoEl && parseFloat(videoEl.style.left - videoEl.style.width);
    },
    get width() {
      return videoEl && parseFloat(videoEl.style.width);
    },
    get height() {
      return videoEl && parseFloat(videoEl.style.height);
    },
    get visible() {
      if (textureMode === true) {
        return videoTexture.isVisible;
      } else {
        return videoEl && videoEl.style.display === 'block';
      }
    },
    get adsEnabled() {
      return state$1.adsEnabled;
    },
    // prefixed with underscore to indicate 'semi-private'
    // because it's not recommended to interact directly with the video element
    get _videoEl() {
      return videoEl;
    },
    get _consumer() {
      return consumer$1;
    }
  };
  autoSetupMixin(videoPlayerPlugin, () => {
    precision = ApplicationInstance$1 && ApplicationInstance$1.stage && ApplicationInstance$1.stage.getRenderPrecision() || precision;
    videoEl = setupVideoTag();
    textureMode = Settings$1.get('platform', 'textureMode', false);
    if (textureMode === true) {
      videoEl.setAttribute('crossorigin', 'anonymous');
      videoTexture = setUpVideoTexture();
    }
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let consumer;
  let getAds = () => {
    // todo: enable some default ads during development, maybe from the settings.json
    return Promise.resolve({
      prerolls: [],
      midrolls: [],
      postrolls: []
    });
  };
  const initAds = config => {
    if (config.getAds) {
      getAds = config.getAds;
    }
  };
  const state = {
    active: false
  };
  const playSlot = function () {
    let slot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return slot.reduce((promise, ad) => {
      return promise.then(() => {
        return playAd(ad);
      });
    }, Promise.resolve(null));
  };
  const playAd = ad => {
    return new Promise(resolve => {
      if (state.active === false) {
        Log$1.info('Ad', 'Skipping add due to inactive state');
        return resolve();
      }
      // is it safe to rely on videoplayer plugin already created the video tag?
      const videoEl = document.getElementsByTagName('video')[0];
      videoEl.style.display = 'block';
      videoEl.style.visibility = 'visible';
      videoEl.src = mediaUrl$1(ad.url);
      videoEl.load();
      let timeEvents = null;
      let timeout;
      const cleanup = () => {
        // remove all listeners
        Object.keys(handlers).forEach(handler => videoEl.removeEventListener(handler, handlers[handler]));
        resolve();
      };
      const handlers = {
        play() {
          Log$1.info('Ad', 'Play ad', ad.url);
          fireOnConsumer('Play', ad);
          sendBeacon(ad.callbacks, 'defaultImpression');
        },
        ended() {
          fireOnConsumer('Ended', ad);
          sendBeacon(ad.callbacks, 'complete');
          cleanup();
        },
        timeupdate() {
          if (!timeEvents && videoEl.duration) {
            // calculate when to fire the time based events (now that duration is known)
            timeEvents = {
              firstQuartile: videoEl.duration / 4,
              midPoint: videoEl.duration / 2,
              thirdQuartile: videoEl.duration / 4 * 3
            };
            Log$1.info('Ad', 'Calculated quartiles times', {
              timeEvents
            });
          }
          if (timeEvents && timeEvents.firstQuartile && videoEl.currentTime >= timeEvents.firstQuartile) {
            fireOnConsumer('FirstQuartile', ad);
            delete timeEvents.firstQuartile;
            sendBeacon(ad.callbacks, 'firstQuartile');
          }
          if (timeEvents && timeEvents.midPoint && videoEl.currentTime >= timeEvents.midPoint) {
            fireOnConsumer('MidPoint', ad);
            delete timeEvents.midPoint;
            sendBeacon(ad.callbacks, 'midPoint');
          }
          if (timeEvents && timeEvents.thirdQuartile && videoEl.currentTime >= timeEvents.thirdQuartile) {
            fireOnConsumer('ThirdQuartile', ad);
            delete timeEvents.thirdQuartile;
            sendBeacon(ad.callbacks, 'thirdQuartile');
          }
        },
        stalled() {
          fireOnConsumer('Stalled', ad);
          timeout = setTimeout(() => {
            cleanup();
          }, 5000); // make timeout configurable
        },

        canplay() {
          timeout && clearTimeout(timeout);
        },
        error() {
          fireOnConsumer('Error', ad);
          cleanup();
        },
        // this doesn't work reliably on sky box, moved logic to timeUpdate event
        // loadedmetadata() {
        //   // calculate when to fire the time based events (now that duration is known)
        //   timeEvents = {
        //     firstQuartile: videoEl.duration / 4,
        //     midPoint: videoEl.duration / 2,
        //     thirdQuartile: (videoEl.duration / 4) * 3,
        //   }
        // },
        abort() {
          cleanup();
        }
        // todo: pause, resume, mute, unmute beacons
      };
      // add all listeners
      Object.keys(handlers).forEach(handler => videoEl.addEventListener(handler, handlers[handler]));
      videoEl.play();
    });
  };
  const sendBeacon = (callbacks, event) => {
    if (callbacks && callbacks[event]) {
      Log$1.info('Ad', 'Sending beacon', event, callbacks[event]);
      return callbacks[event].reduce((promise, url) => {
        return promise.then(() => fetch(url)
        // always resolve, also in case of a fetch error (so we don't block firing the rest of the beacons for this event)
        // note: for fetch failed http responses don't throw an Error :)
        .then(response => {
          if (response.status === 200) {
            fireOnConsumer('Beacon' + event + 'Sent');
          } else {
            fireOnConsumer('Beacon' + event + 'Failed' + response.status);
          }
          Promise.resolve(null);
        }).catch(() => {
          Promise.resolve(null);
        }));
      }, Promise.resolve(null));
    } else {
      Log$1.info('Ad', 'No callback found for ' + event);
    }
  };
  const fireOnConsumer = (event, args) => {
    if (consumer) {
      consumer.fire('$ad' + event, args);
      consumer.fire('$adEvent', event, args);
    }
  };
  var Ads = {
    get(config, videoPlayerConsumer) {
      if (config.enabled === false) {
        return Promise.resolve({
          prerolls() {
            return Promise.resolve();
          }
        });
      }
      consumer = videoPlayerConsumer;
      return new Promise(resolve => {
        Log$1.info('Ad', 'Starting session');
        getAds(config).then(ads => {
          Log$1.info('Ad', 'API result', ads);
          resolve({
            prerolls() {
              if (ads.preroll) {
                state.active = true;
                fireOnConsumer('PrerollSlotImpression', ads);
                sendBeacon(ads.preroll.callbacks, 'slotImpression');
                return playSlot(ads.preroll.ads).then(() => {
                  fireOnConsumer('PrerollSlotEnd', ads);
                  sendBeacon(ads.preroll.callbacks, 'slotEnd');
                  state.active = false;
                });
              }
              return Promise.resolve();
            },
            midrolls() {
              return Promise.resolve();
            },
            postrolls() {
              return Promise.resolve();
            }
          });
        });
      });
    },
    cancel() {
      Log$1.info('Ad', 'Cancel Ad');
      state.active = false;
    },
    stop() {
      Log$1.info('Ad', 'Stop Ad');
      state.active = false;
      // fixme: duplication
      const videoEl = document.getElementsByTagName('video')[0];
      videoEl.pause();
      videoEl.removeAttribute('src');
    }
  };

  var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
  };
  function isNonNullObject(value) {
    return !!value && typeof value === 'object';
  }
  function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
  }

  // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
  function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
  }
  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
  }
  function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
  }
  function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function (element) {
      return cloneUnlessOtherwiseSpecified(element, options);
    });
  }
  function getMergeFunction(key, options) {
    if (!options.customMerge) {
      return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
  }
  function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
      return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
  }
  function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
  }
  function propertyIsOnObject(object, property) {
    try {
      return property in object;
    } catch (_) {
      return false;
    }
  }

  // Protects from prototype poisoning and unexpected merging up the prototype chain.
  function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
    && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
    && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
  }

  function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
      getKeys(target).forEach(function (key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
      });
    }
    getKeys(source).forEach(function (key) {
      if (propertyIsUnsafe(target, key)) {
        return;
      }
      if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
        destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
      } else {
        destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
      }
    });
    return destination;
  }
  function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
      return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
      return options.arrayMerge(target, source, options);
    } else {
      return mergeObject(target, source, options);
    }
  }
  deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
      throw new Error('first argument should be an array');
    }
    return array.reduce(function (prev, next) {
      return deepmerge(prev, next, options);
    }, {});
  };
  var deepmerge_1 = deepmerge;
  var cjs = deepmerge_1;

  /*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */

  function isObject$2(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
  }

  function isPlainObject(o) {
    var ctor,prot;

    if (isObject$2(o) === false) return false;

    // If has modified constructor
    ctor = o.constructor;
    if (ctor === undefined) return true;

    // If has modified prototype
    prot = ctor.prototype;
    if (isObject$2(prot) === false) return false;

    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty('isPrototypeOf') === false) {
      return false;
    }

    // Most likely a plain Object
    return true;
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let warned = false;
  const deprecated = function () {
    let force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (force === true || warned === false) {
      console.warn(["The 'Locale'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'Language'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/language'].join('\n\n'));
    }
    warned = true;
  };
  class Locale {
    constructor() {
      this.__enabled = false;
    }

    /**
     * Loads translation object from external json file.
     *
     * @param {String} path Path to resource.
     * @return {Promise}
     */
    async load(path) {
      if (!this.__enabled) {
        return;
      }
      await fetch(path).then(resp => resp.json()).then(resp => {
        this.loadFromObject(resp);
      });
    }

    /**
     * Sets language used by module.
     *
     * @param {String} lang
     */
    setLanguage(lang) {
      deprecated();
      this.__enabled = true;
      this.language = lang;
    }

    /**
     * Returns reference to translation object for current language.
     *
     * @return {Object}
     */
    get tr() {
      deprecated(true);
      return this.__trObj[this.language];
    }

    /**
     * Loads translation object from existing object (binds existing object).
     *
     * @param {Object} trObj
     */
    loadFromObject(trObj) {
      deprecated();
      const fallbackLanguage = 'en';
      if (Object.keys(trObj).indexOf(this.language) === -1) {
        Log$1.warn('No translations found for: ' + this.language);
        if (Object.keys(trObj).indexOf(fallbackLanguage) > -1) {
          Log$1.warn('Using fallback language: ' + fallbackLanguage);
          this.language = fallbackLanguage;
        } else {
          const error = 'No translations found for fallback language: ' + fallbackLanguage;
          Log$1.error(error);
          throw Error(error);
        }
      }
      this.__trObj = trObj;
      for (const lang of Object.values(this.__trObj)) {
        for (const str of Object.keys(lang)) {
          lang[str] = new LocalizedString(lang[str]);
        }
      }
    }
  }

  /**
   * Extended string class used for localization.
   */
  class LocalizedString extends String {
    /**
     * Returns formatted LocalizedString.
     * Replaces each placeholder value (e.g. {0}, {1}) with corresponding argument.
     *
     * E.g.:
     * > new LocalizedString('{0} and {1} and {0}').format('A', 'B');
     * A and B and A
     *
     * @param  {...any} args List of arguments for placeholders.
     */
    format() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const sub = args.reduce((string, arg, index) => string.split("{".concat(index, "}")).join(arg), this);
      return new LocalizedString(sub);
    }
  }
  var Locale$1 = new Locale();

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class VersionLabel extends Lightning$1.Component {
    static _template() {
      return {
        rect: true,
        color: 0xbb0078ac,
        h: 40,
        w: 100,
        x: w => w - 50,
        y: h => h - 50,
        mount: 1,
        Text: {
          w: w => w,
          h: h => h,
          y: 5,
          x: 20,
          text: {
            fontSize: 22,
            lineHeight: 26
          }
        }
      };
    }
    _firstActive() {
      this.tag('Text').text = "APP - v".concat(this.version, "\nSDK - v").concat(this.sdkVersion);
      this.tag('Text').loadTexture();
      this.w = this.tag('Text').renderWidth + 40;
      this.h = this.tag('Text').renderHeight + 5;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class FpsIndicator extends Lightning$1.Component {
    static _template() {
      return {
        rect: true,
        color: 0xffffffff,
        texture: Lightning$1.Tools.getRoundRect(80, 80, 40),
        h: 80,
        w: 80,
        x: 100,
        y: 100,
        mount: 1,
        Background: {
          x: 3,
          y: 3,
          texture: Lightning$1.Tools.getRoundRect(72, 72, 36),
          color: 0xff008000
        },
        Counter: {
          w: w => w,
          h: h => h,
          y: 10,
          text: {
            fontSize: 32,
            textAlign: 'center'
          }
        },
        Text: {
          w: w => w,
          h: h => h,
          y: 48,
          text: {
            fontSize: 15,
            textAlign: 'center',
            text: 'FPS'
          }
        }
      };
    }
    _setup() {
      this.config = {
        ...{
          log: false,
          interval: 500,
          threshold: 1
        },
        ...Settings$2.get('platform', 'showFps')
      };
      this.fps = 0;
      this.lastFps = this.fps - this.config.threshold;
      const fpsCalculator = () => {
        this.fps = ~~(1 / this.stage.dt);
      };
      this.stage.on('frameStart', fpsCalculator);
      this.stage.off('framestart', fpsCalculator);
      this.interval = setInterval(this.showFps.bind(this), this.config.interval);
    }
    _firstActive() {
      this.showFps();
    }
    _detach() {
      clearInterval(this.interval);
    }
    showFps() {
      if (Math.abs(this.lastFps - this.fps) <= this.config.threshold) return;
      this.lastFps = this.fps;
      // green
      let bgColor = 0xff008000;
      // orange
      if (this.fps <= 40 && this.fps > 20) bgColor = 0xffffa500;
      // red
      else if (this.fps <= 20) bgColor = 0xffff0000;
      this.tag('Background').setSmooth('color', bgColor);
      this.tag('Counter').text = "".concat(this.fps);
      this.config.log && Log$1.info('FPS', this.fps);
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var fetchJson = (file => {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          // file protocol returns 0
          // http(s) protocol returns 200
          if (xhr.status === 0 || xhr.status === 200) resolve(JSON.parse(xhr.responseText));else reject(xhr.statusText);
        }
      };
      xhr.open('GET', file);
      xhr.send(null);
    });
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  let basePath;
  let proxyUrl;
  const initUtils = config => {
    basePath = ensureUrlWithProtocol(makeFullStaticPath(window.location.pathname, config.path || '/'));
    if (config.proxyUrl) {
      proxyUrl = ensureUrlWithProtocol(config.proxyUrl);
    }
  };
  var Utils = {
    asset(relPath) {
      return basePath + relPath;
    },
    proxyUrl(url) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return proxyUrl ? proxyUrl + '?' + makeQueryString(url, options) : url;
    },
    makeQueryString() {
      return makeQueryString(...arguments);
    },
    // since imageworkers don't work without protocol
    ensureUrlWithProtocol() {
      return ensureUrlWithProtocol(...arguments);
    }
  };
  const ensureUrlWithProtocol = url => {
    if (/^\/[^/]/i.test(url) && /^(?:file:)/i.test(window.location.protocol)) {
      return window.location.protocol + '//' + url;
    }
    if (/^\/\//.test(url)) {
      return window.location.protocol + url;
    }
    if (!/^(?:https?:)/i.test(url)) {
      return window.location.origin + url;
    }
    return url;
  };
  const makeFullStaticPath = function () {
    let pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    let path = arguments.length > 1 ? arguments[1] : undefined;
    // ensure path has traling slash
    path = path.charAt(path.length - 1) !== '/' ? path + '/' : path;

    // if path is URL, we assume it's already the full static path, so we just return it
    if (/^(?:https?:)?(?:\/\/)/.test(path)) {
      return path;
    }
    if (path.charAt(0) === '/') {
      return path;
    } else {
      // cleanup the pathname (i.e. remove possible index.html)
      pathname = cleanUpPathName(pathname);

      // remove possible leading dot from path
      path = path.charAt(0) === '.' ? path.substr(1) : path;
      // ensure path has leading slash
      path = path.charAt(0) !== '/' ? '/' + path : path;
      return pathname + path;
    }
  };
  const cleanUpPathName = pathname => {
    if (pathname.slice(-1) === '/') return pathname.slice(0, -1);
    const parts = pathname.split('/');
    if (parts[parts.length - 1].indexOf('.') > -1) parts.pop();
    return parts.join('/');
  };
  const makeQueryString = function (url) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'url';
    // add operator as an option
    options.operator = 'metrological'; // Todo: make this configurable (via url?)
    // add type (= url or qr) as an option, with url as the value
    options[type] = url;
    return Object.keys(options).map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent('' + options[key]);
    }).join('&');
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let meta = {};
  let translations = {};
  let language$1 = null;
  const initLanguage = function (file) {
    let language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return new Promise((resolve, reject) => {
      fetchJson(file).then(json => {
        setTranslations(json);
        // set language (directly or in a promise)
        typeof language === 'object' && 'then' in language && typeof language.then === 'function' ? language.then(lang => setLanguage(lang).then(resolve).catch(reject)).catch(e => {
          Log$1.error(e);
          reject(e);
        }) : setLanguage(language).then(resolve).catch(reject);
      }).catch(() => {
        const error = 'Language file ' + file + ' not found';
        Log$1.error(error);
        reject(error);
      });
    });
  };
  const setTranslations = obj => {
    if ('meta' in obj) {
      meta = {
        ...obj.meta
      };
      delete obj.meta;
    }
    translations = obj;
  };
  const setLanguage = lng => {
    language$1 = null;
    return new Promise((resolve, reject) => {
      if (lng in translations) {
        language$1 = lng;
      } else {
        if ('map' in meta && lng in meta.map && meta.map[lng] in translations) {
          language$1 = meta.map[lng];
        } else if ('default' in meta && meta.default in translations) {
          const error = 'Translations for Language ' + language$1 + ' not found. Using default language ' + meta.default;
          Log$1.warn(error);
          language$1 = meta.default;
        } else {
          const error = 'Translations for Language ' + language$1 + ' not found.';
          Log$1.error(error);
          reject(error);
        }
      }
      if (language$1) {
        Log$1.info('Setting language to', language$1);
        const translationsObj = translations[language$1];
        if (typeof translationsObj === 'object') {
          resolve();
        } else if (typeof translationsObj === 'string') {
          const url = Utils.asset(translationsObj);
          fetchJson(url).then(json => {
            // save the translations for this language (to prevent loading twice)
            translations[language$1] = json;
            resolve();
          }).catch(e => {
            const error = 'Error while fetching ' + url;
            Log$1.error(error, e);
            reject(error);
          });
        }
      }
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const registry = {
    eventListeners: [],
    timeouts: [],
    intervals: [],
    targets: []
  };
  var Registry = {
    // Timeouts
    setTimeout(cb, timeout) {
      for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
      }
      const timeoutId = setTimeout(() => {
        registry.timeouts = registry.timeouts.filter(id => id !== timeoutId);
        cb.apply(null, params);
      }, timeout, params);
      Log$1.info('Set Timeout', 'ID: ' + timeoutId);
      registry.timeouts.push(timeoutId);
      return timeoutId;
    },
    clearTimeout(timeoutId) {
      if (registry.timeouts.indexOf(timeoutId) > -1) {
        registry.timeouts = registry.timeouts.filter(id => id !== timeoutId);
        Log$1.info('Clear Timeout', 'ID: ' + timeoutId);
        clearTimeout(timeoutId);
      } else {
        Log$1.error('Clear Timeout', 'ID ' + timeoutId + ' not found');
      }
    },
    clearTimeouts() {
      registry.timeouts.forEach(timeoutId => {
        this.clearTimeout(timeoutId);
      });
    },
    // Intervals
    setInterval(cb, interval) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        params[_key2 - 2] = arguments[_key2];
      }
      const intervalId = setInterval(() => {
        registry.intervals.filter(id => id !== intervalId);
        cb.apply(null, params);
      }, interval, params);
      Log$1.info('Set Interval', 'ID: ' + intervalId);
      registry.intervals.push(intervalId);
      return intervalId;
    },
    clearInterval(intervalId) {
      if (registry.intervals.indexOf(intervalId) > -1) {
        registry.intervals = registry.intervals.filter(id => id !== intervalId);
        Log$1.info('Clear Interval', 'ID: ' + intervalId);
        clearInterval(intervalId);
      } else {
        Log$1.error('Clear Interval', 'ID ' + intervalId + ' not found');
      }
    },
    clearIntervals() {
      registry.intervals.forEach(intervalId => {
        this.clearInterval(intervalId);
      });
    },
    // Event listeners
    addEventListener(target, event, handler) {
      target.addEventListener(event, handler);
      const targetIndex = registry.targets.indexOf(target) > -1 ? registry.targets.indexOf(target) : registry.targets.push(target) - 1;
      registry.eventListeners[targetIndex] = registry.eventListeners[targetIndex] || {};
      registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event] || [];
      registry.eventListeners[targetIndex][event].push(handler);
      Log$1.info('Add eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
    },
    removeEventListener(target, event, handler) {
      const targetIndex = registry.targets.indexOf(target);
      if (targetIndex > -1 && registry.eventListeners[targetIndex] && registry.eventListeners[targetIndex][event] && registry.eventListeners[targetIndex][event].indexOf(handler) > -1) {
        registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event].filter(fn => fn !== handler);
        Log$1.info('Remove eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
        target.removeEventListener(event, handler);
        // remove key from event listeners object when no events are registered for that event
        Object.keys(registry.eventListeners[targetIndex]).forEach(event => {
          if (registry.eventListeners[targetIndex][event].length === 0) {
            delete registry.eventListeners[targetIndex][event];
          }
        });
        // remove reference to the target when target has no event listeners registered
        if (Object.keys(registry.eventListeners[targetIndex]).length === 0) {
          registry.targets.splice(targetIndex, 1);
          registry.eventListeners.splice(targetIndex, 1);
        }
      } else {
        Log$1.error('Remove eventListener', 'Not found', 'Target', target, 'Event: ' + event, 'Handler', handler.toString());
      }
    },
    // if `event` is omitted, removes all registered event listeners for target
    // if `target` is also omitted, removes all registered event listeners
    removeEventListeners(target, event) {
      if (target && event) {
        const targetIndex = registry.targets.indexOf(target);
        if (targetIndex > -1) {
          registry.eventListeners[targetIndex][event].forEach(handler => {
            this.removeEventListener(target, event, handler);
          });
        }
      } else if (target) {
        const targetIndex = registry.targets.indexOf(target);
        if (targetIndex > -1) {
          Object.keys(registry.eventListeners[targetIndex]).forEach(_event => {
            this.removeEventListeners(target, _event);
          });
        }
      } else {
        Object.keys(registry.eventListeners).forEach(targetIndex => {
          this.removeEventListeners(registry.targets[targetIndex]);
        });
      }
    },
    // Clear everything (to be called upon app close for proper cleanup)
    clear() {
      this.clearTimeouts();
      this.clearIntervals();
      this.removeEventListeners();
      registry.eventListeners = [];
      registry.timeouts = [];
      registry.intervals = [];
      registry.targets = [];
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const isObject$1 = v => {
    return typeof v === 'object' && v !== null;
  };
  const isString$1 = v => {
    return typeof v === 'string';
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let colors = {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    yellow: '#feff00',
    cyan: '#00feff',
    magenta: '#ff00ff'
  };
  const normalizedColors = {
    //store for normalized colors
  };
  const addColors = (colorsToAdd, value) => {
    if (isObject$1(colorsToAdd)) {
      // clean up normalizedColors if they exist in the to be added colors
      Object.keys(colorsToAdd).forEach(color => cleanUpNormalizedColors(color));
      colors = Object.assign({}, colors, colorsToAdd);
    } else if (isString$1(colorsToAdd) && value) {
      cleanUpNormalizedColors(colorsToAdd);
      colors[colorsToAdd] = value;
    }
  };
  const cleanUpNormalizedColors = color => {
    for (let c in normalizedColors) {
      if (c.indexOf(color) > -1) {
        delete normalizedColors[c];
      }
    }
  };
  const initColors = file => {
    return new Promise((resolve, reject) => {
      if (typeof file === 'object') {
        addColors(file);
        return resolve();
      }
      fetchJson(file).then(json => {
        addColors(json);
        return resolve();
      }).catch(() => {
        const error = 'Colors file ' + file + ' not found';
        Log$1.error(error);
        return reject(error);
      });
    });
  };

  var name$1 = "@lightningjs/sdk";
  var version$1 = "5.4.1";
  var license = "Apache-2.0";
  var types = "index.d.ts";
  var scripts = {
  	postinstall: "node ./scripts/postinstall.js",
  	lint: "eslint '**/*.js'",
  	release: "npm publish --access public",
  	typedoc: "typedoc --tsconfig tsconfig.typedoc.json",
  	tsd: "tsd"
  };
  var husky = {
  	hooks: {
  		"pre-commit": "lint-staged"
  	}
  };
  var dependencies = {
  	"@babel/polyfill": "^7.11.5",
  	"@lightningjs/core": "^2.7.0",
  	"@metrological/sdk": "^1.0.0",
  	"@michieljs/execute-as-promise": "^1.0.0",
  	deepmerge: "^4.2.2",
  	"is-plain-object": "^5.0.0",
  	localcookies: "^2.0.0",
  	shelljs: "^0.8.5",
  	"url-polyfill": "^1.1.10",
  	"whatwg-fetch": "^3.0.0"
  };
  var devDependencies = {
  	"@babel/core": "^7.11.6",
  	"@babel/plugin-transform-parameters": "^7.10.5 ",
  	"@babel/plugin-transform-spread": "^7.11.0",
  	"@babel/preset-env": "^7.11.5",
  	"babel-eslint": "^10.1.0",
  	eslint: "^7.10.0",
  	"eslint-config-prettier": "^6.12.0",
  	"eslint-plugin-prettier": "^3.1.4",
  	husky: "^4.3.0",
  	"lint-staged": "^10.4.0",
  	prettier: "^1.19.1",
  	rollup: "^1.32.1",
  	"rollup-plugin-babel": "^4.4.0",
  	tsd: "^0.22.0",
  	typedoc: "^0.23.9"
  };
  var repository = {
  	type: "git",
  	url: "git@github.com:rdkcentral/Lightning-SDK.git"
  };
  var bugs = {
  	url: "https://github.com/rdkcentral/Lightning-SDK/issues"
  };
  var packageInfo = {
  	name: name$1,
  	version: version$1,
  	license: license,
  	types: types,
  	scripts: scripts,
  	"lint-staged": {
  	"*.js": [
  		"eslint --fix"
  	],
  	"src/startApp.js": [
  		"rollup -c ./rollup.config.js"
  	]
  },
  	husky: husky,
  	dependencies: dependencies,
  	devDependencies: devDependencies,
  	repository: repository,
  	bugs: bugs
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let AppInstance;
  const defaultOptions = {
    stage: {
      w: 1920,
      h: 1080,
      precision: 1,
      clearColor: 0x00000000,
      canvas2d: false
    },
    debug: false,
    defaultFontFace: 'RobotoRegular',
    keys: {
      8: 'Back',
      13: 'Enter',
      27: 'Menu',
      37: 'Left',
      38: 'Up',
      39: 'Right',
      40: 'Down',
      174: 'ChannelDown',
      175: 'ChannelUp',
      178: 'Stop',
      250: 'PlayPause',
      191: 'Search',
      // Use "/" for keyboard
      409: 'Search'
    }
  };
  const customFontFaces = [];
  const fontLoader = (fonts, store) => new Promise((resolve, reject) => {
    fonts.map(_ref => {
      let {
        family,
        url,
        urls,
        descriptors
      } = _ref;
      return () => {
        const src = urls ? urls.map(url => {
          return 'url(' + url + ')';
        }) : 'url(' + url + ')';
        const fontFace = new FontFace(family, src, descriptors || {});
        store.push(fontFace);
        Log$1.info('Loading font', family);
        document.fonts.add(fontFace);
        return fontFace.load();
      };
    }).reduce((promise, method) => {
      return promise.then(() => method());
    }, Promise.resolve(null)).then(resolve).catch(reject);
  });
  function Application (App, appData, platformSettings) {
    const {
      width,
      height
    } = platformSettings;
    if (width && height) {
      defaultOptions.stage['w'] = width;
      defaultOptions.stage['h'] = height;
      defaultOptions.stage['precision'] = width / 1920;
    }

    // support for 720p browser
    if (!width && !height && window.innerHeight === 720) {
      defaultOptions.stage['w'] = 1280;
      defaultOptions.stage['h'] = 720;
      defaultOptions.stage['precision'] = 1280 / 1920;
    }
    return class Application extends Lightning$1.Application {
      constructor(options) {
        const config = cjs(defaultOptions, options, {
          isMergeableObject: isPlainObject
        });
        super(config);
        this.config = config;
      }
      static _template() {
        return {
          w: 1920,
          h: 1080
        };
      }
      colorshift() {
        let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Accessibility.colorshift(this, type, config);
      }
      get keymapping() {
        return this.stage.application.config.keys;
      }

      /**
       * This function overrides the default keymap with the latest keymap.
       * @param customKeyMap
       * @param keepDuplicates
       */
      overrideKeyMap(customKeyMap) {
        let keepDuplicates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        const baseKeyMap = this.stage.application.config.keys;
        Object.keys(customKeyMap).reduce((keymapping, key) => {
          // prevent duplicate values to exist in final keymapping (i.e. 2 keys triggering 'Back')
          if (!keepDuplicates) {
            Object.keys(baseKeyMap).forEach(baseKey => {
              if (baseKey != key && baseKeyMap[baseKey] == customKeyMap[key]) {
                delete keymapping[baseKey];
              }
            });
          }
          keymapping[key] = customKeyMap[key];
          return keymapping;
        }, baseKeyMap);
        return baseKeyMap;
      }
      _setup() {
        Promise.all([this.loadFonts(App.config && App.config.fonts || App.getFonts && App.getFonts() || []),
        // to be deprecated
        Locale$1.load(App.config && App.config.locale || App.getLocale && App.getLocale()), App.language && this.loadLanguage(App.language()), App.colors && this.loadColors(App.colors())]).then(() => {
          Metrics$2.app.loaded();
          this.w = this.config.stage.w / this.config.stage.precision;
          this.h = this.config.stage.h / this.config.stage.precision;
          AppInstance = this.stage.c({
            ref: 'App',
            type: App,
            zIndex: 1,
            forceZIndexContext: !!platformSettings.showVersion || !!platformSettings.showFps
          });
          this.childList.a(AppInstance);
          this._refocus();
          Log$1.info('App version', this.config.version);
          Log$1.info('SDK version', packageInfo.version);
          if (platformSettings.showVersion) {
            this.childList.a({
              ref: 'VersionLabel',
              type: VersionLabel,
              version: this.config.version,
              sdkVersion: packageInfo.version,
              zIndex: 1
            });
          }
          if (platformSettings.showFps) {
            this.childList.a({
              ref: 'FpsCounter',
              type: FpsIndicator,
              zIndex: 1
            });
          }
          super._setup();
        }).catch(console.error);
      }
      _handleBack() {
        this.closeApp();
      }
      _handleExit() {
        this.closeApp();
      }
      closeApp() {
        Log$1.info('Signaling App Close');
        if (platformSettings.onClose && typeof platformSettings.onClose === 'function') {
          platformSettings.onClose(...arguments);
        } else {
          this.close();
        }
      }
      close() {
        Log$1.info('Closing App');
        Settings$2.clearSubscribers();
        Registry.clear();
        this.childList.remove(this.tag('App'));
        this.cleanupFonts();
        // force texture garbage collect
        this.stage.gc();
        this.destroy();
      }
      loadFonts(fonts) {
        return platformSettings.fontLoader && typeof platformSettings.fontLoader === 'function' ? platformSettings.fontLoader(fonts, customFontFaces) : fontLoader(fonts, customFontFaces);
      }
      cleanupFonts() {
        if ('delete' in document.fonts) {
          customFontFaces.forEach(fontFace => {
            Log$1.info('Removing font', fontFace.family);
            document.fonts.delete(fontFace);
          });
        } else {
          Log$1.info('No support for removing manually-added fonts');
        }
      }
      loadLanguage(config) {
        let file = Utils.asset('translations.json');
        let language = config;
        if (typeof language === 'object') {
          language = config.language || null;
          file = config.file || file;
        }
        return initLanguage(file, language);
      }
      loadColors(config) {
        let file = Utils.asset('colors.json');
        if (config && (typeof config === 'string' || typeof config === 'object')) {
          file = config;
        }
        return initColors(file);
      }
      set focus(v) {
        this._focussed = v;
        this._refocus();
      }
      _getFocused() {
        return this._focussed || this.tag('App');
      }
    };
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ScaledImageTexture extends Lightning$1.textures.ImageTexture {
    constructor(stage) {
      super(stage);
      this._scalingOptions = undefined;
    }
    set options(options) {
      this.resizeMode = this._scalingOptions = options;
    }
    _getLookupId() {
      return "".concat(this._src, "-").concat(this._scalingOptions.type, "-").concat(this._scalingOptions.w, "-").concat(this._scalingOptions.h);
    }
    getNonDefaults() {
      const obj = super.getNonDefaults();
      if (this._src) {
        obj.src = this._src;
      }
      return obj;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const events = ['timeupdate', 'error', 'ended', 'loadeddata', 'canplay', 'play', 'playing', 'pause', 'loadstart', 'seeking', 'seeked', 'encrypted'];
  let mediaUrl = url => url;
  const initMediaPlayer = config => {
    if (config.mediaUrl) {
      mediaUrl = config.mediaUrl;
    }
  };
  class Mediaplayer extends Lightning$1.Component {
    _construct() {
      this._skipRenderToTexture = false;
      this._metrics = null;
      this._textureMode = Settings$2.get('platform', 'textureMode') || false;
      Log$1.info('Texture mode: ' + this._textureMode);
      console.warn(["The 'MediaPlayer'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'VideoPlayer'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/videoplayer'].join('\n\n'));
    }
    static _template() {
      return {
        Video: {
          VideoWrap: {
            VideoTexture: {
              visible: false,
              pivot: 0.5,
              texture: {
                type: Lightning$1.textures.StaticTexture,
                options: {}
              }
            }
          }
        }
      };
    }
    set skipRenderToTexture(v) {
      this._skipRenderToTexture = v;
    }
    get textureMode() {
      return this._textureMode;
    }
    get videoView() {
      return this.tag('Video');
    }
    _init() {
      //re-use videotag if already there
      const videoEls = document.getElementsByTagName('video');
      if (videoEls && videoEls.length > 0) this.videoEl = videoEls[0];else {
        this.videoEl = document.createElement('video');
        this.videoEl.setAttribute('id', 'video-player');
        this.videoEl.style.position = 'absolute';
        this.videoEl.style.zIndex = '1';
        this.videoEl.style.display = 'none';
        this.videoEl.setAttribute('width', '100%');
        this.videoEl.setAttribute('height', '100%');
        this.videoEl.style.visibility = this.textureMode ? 'hidden' : 'visible';
        document.body.appendChild(this.videoEl);
      }
      if (this.textureMode && !this._skipRenderToTexture) {
        this._createVideoTexture();
      }
      this.eventHandlers = [];
    }
    _registerListeners() {
      events.forEach(event => {
        const handler = e => {
          if (this._metrics && this._metrics[event] && typeof this._metrics[event] === 'function') {
            this._metrics[event]({
              currentTime: this.videoEl.currentTime
            });
          }
          this.fire(event, {
            videoElement: this.videoEl,
            event: e
          });
        };
        this.eventHandlers.push(handler);
        this.videoEl.addEventListener(event, handler);
      });
    }
    _deregisterListeners() {
      Log$1.info('Deregistering event listeners MediaPlayer');
      events.forEach((event, index) => {
        this.videoEl.removeEventListener(event, this.eventHandlers[index]);
      });
      this.eventHandlers = [];
    }
    _attach() {
      this._registerListeners();
    }
    _detach() {
      this._deregisterListeners();
      this.close();
    }
    _createVideoTexture() {
      const stage = this.stage;
      const gl = stage.gl;
      const glTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, glTexture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      this.videoTexture.options = {
        source: glTexture,
        w: this.videoEl.width,
        h: this.videoEl.height
      };
    }
    _startUpdatingVideoTexture() {
      if (this.textureMode && !this._skipRenderToTexture) {
        const stage = this.stage;
        if (!this._updateVideoTexture) {
          this._updateVideoTexture = () => {
            if (this.videoTexture.options.source && this.videoEl.videoWidth && this.active) {
              const gl = stage.gl;
              const currentTime = new Date().getTime();

              // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
              // We'll fallback to fixed 30fps in this case.
              const frameCount = this.videoEl.webkitDecodedFrameCount;
              const mustUpdate = frameCount ? this._lastFrame !== frameCount : this._lastTime < currentTime - 30;
              if (mustUpdate) {
                this._lastTime = currentTime;
                this._lastFrame = frameCount;
                try {
                  gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.videoEl);
                  this._lastFrame = this.videoEl.webkitDecodedFrameCount;
                  this.videoTextureView.visible = true;
                  this.videoTexture.options.w = this.videoEl.videoWidth;
                  this.videoTexture.options.h = this.videoEl.videoHeight;
                  const expectedAspectRatio = this.videoTextureView.w / this.videoTextureView.h;
                  const realAspectRatio = this.videoEl.videoWidth / this.videoEl.videoHeight;
                  if (expectedAspectRatio > realAspectRatio) {
                    this.videoTextureView.scaleX = realAspectRatio / expectedAspectRatio;
                    this.videoTextureView.scaleY = 1;
                  } else {
                    this.videoTextureView.scaleY = expectedAspectRatio / realAspectRatio;
                    this.videoTextureView.scaleX = 1;
                  }
                } catch (e) {
                  Log$1.error('texImage2d video', e);
                  this._stopUpdatingVideoTexture();
                  this.videoTextureView.visible = false;
                }
                this.videoTexture.source.forceRenderUpdate();
              }
            }
          };
        }
        if (!this._updatingVideoTexture) {
          stage.on('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = true;
        }
      }
    }
    _stopUpdatingVideoTexture() {
      if (this.textureMode) {
        const stage = this.stage;
        stage.removeListener('frameStart', this._updateVideoTexture);
        this._updatingVideoTexture = false;
        this.videoTextureView.visible = false;
        if (this.videoTexture.options.source) {
          const gl = stage.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
    }
    updateSettings() {
      let settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // The Component that 'consumes' the media player.
      this._consumer = settings.consumer;
      if (this._consumer && this._consumer.getMediaplayerSettings) {
        // Allow consumer to add settings.
        settings = Object.assign(settings, this._consumer.getMediaplayerSettings());
      }
      if (!Lightning$1.Utils.equalValues(this._stream, settings.stream)) {
        if (settings.stream && settings.stream.keySystem) {
          navigator.requestMediaKeySystemAccess(settings.stream.keySystem.id, settings.stream.keySystem.config).then(keySystemAccess => {
            return keySystemAccess.createMediaKeys();
          }).then(createdMediaKeys => {
            return this.videoEl.setMediaKeys(createdMediaKeys);
          }).then(() => {
            if (settings.stream && settings.stream.src) this.open(settings.stream.src);
          }).catch(() => {
            console.error('Failed to set up MediaKeys');
          });
        } else if (settings.stream && settings.stream.src) {
          // This is here to be backwards compatible, will be removed
          // in future sdk release
          if (Settings$2.get('app', 'hls')) {
            if (!window.Hls) {
              window.Hls = class Hls {
                static isSupported() {
                  console.warn('hls-light not included');
                  return false;
                }
              };
            }
            if (window.Hls.isSupported()) {
              if (!this._hls) this._hls = new window.Hls({
                liveDurationInfinity: true
              });
              this._hls.loadSource(settings.stream.src);
              this._hls.attachMedia(this.videoEl);
              this.videoEl.style.display = 'block';
            }
          } else {
            this.open(settings.stream.src);
          }
        } else {
          this.close();
        }
        this._stream = settings.stream;
      }
      this._setHide(settings.hide);
      this._setVideoArea(settings.videoPos);
    }
    _setHide(hide) {
      if (this.textureMode) {
        this.tag('Video').setSmooth('alpha', hide ? 0 : 1);
      } else {
        this.videoEl.style.visibility = hide ? 'hidden' : 'visible';
      }
    }
    open(url) {
      let settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        hide: false,
        videoPosition: null
      };
      // prep the media url to play depending on platform (mediaPlayerplugin)
      url = mediaUrl(url);
      this._metrics = Metrics$2.media(url);
      Log$1.info('Playing stream', url);
      if (this.application.noVideo) {
        Log$1.info('noVideo option set, so ignoring: ' + url);
        return;
      }
      // close the video when opening same url as current (effectively reloading)
      if (this.videoEl.getAttribute('src') === url) {
        this.close();
      }
      this.videoEl.setAttribute('src', url);

      // force hide, then force show (in next tick!)
      // (fixes comcast playback rollover issue)
      this.videoEl.style.visibility = 'hidden';
      this.videoEl.style.display = 'none';
      setTimeout(() => {
        this.videoEl.style.display = 'block';
        this.videoEl.style.visibility = 'visible';
      });
      this._setHide(settings.hide);
      this._setVideoArea(settings.videoPosition || [0, 0, 1920, 1080]);
    }
    close() {
      // We need to pause first in order to stop sound.
      this.videoEl.pause();
      this.videoEl.removeAttribute('src');

      // force load to reset everything without errors
      this.videoEl.load();
      this._clearSrc();
      this.videoEl.style.display = 'none';
    }
    playPause() {
      if (this.isPlaying()) {
        this.doPause();
      } else {
        this.doPlay();
      }
    }
    get muted() {
      return this.videoEl.muted;
    }
    set muted(v) {
      this.videoEl.muted = v;
    }
    get loop() {
      return this.videoEl.loop;
    }
    set loop(v) {
      this.videoEl.loop = v;
    }
    isPlaying() {
      return this._getState() === 'Playing';
    }
    doPlay() {
      this.videoEl.play();
    }
    doPause() {
      this.videoEl.pause();
    }
    reload() {
      var url = this.videoEl.getAttribute('src');
      this.close();
      this.videoEl.src = url;
    }
    getPosition() {
      return Promise.resolve(this.videoEl.currentTime);
    }
    setPosition(pos) {
      this.videoEl.currentTime = pos;
    }
    getDuration() {
      return Promise.resolve(this.videoEl.duration);
    }
    seek(time) {
      let absolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (absolute) {
        this.videoEl.currentTime = time;
      } else {
        this.videoEl.currentTime += time;
      }
    }
    get videoTextureView() {
      return this.tag('Video').tag('VideoTexture');
    }
    get videoTexture() {
      return this.videoTextureView.texture;
    }
    _setVideoArea(videoPos) {
      if (Lightning$1.Utils.equalValues(this._videoPos, videoPos)) {
        return;
      }
      this._videoPos = videoPos;
      if (this.textureMode) {
        this.videoTextureView.patch({
          smooth: {
            x: videoPos[0],
            y: videoPos[1],
            w: videoPos[2] - videoPos[0],
            h: videoPos[3] - videoPos[1]
          }
        });
      } else {
        const precision = this.stage.getRenderPrecision();
        this.videoEl.style.left = Math.round(videoPos[0] * precision) + 'px';
        this.videoEl.style.top = Math.round(videoPos[1] * precision) + 'px';
        this.videoEl.style.width = Math.round((videoPos[2] - videoPos[0]) * precision) + 'px';
        this.videoEl.style.height = Math.round((videoPos[3] - videoPos[1]) * precision) + 'px';
      }
    }
    _fireConsumer(event, args) {
      if (this._consumer) {
        this._consumer.fire(event, args);
      }
    }
    _equalInitData(buf1, buf2) {
      if (!buf1 || !buf2) return false;
      if (buf1.byteLength != buf2.byteLength) return false;
      const dv1 = new Int8Array(buf1);
      const dv2 = new Int8Array(buf2);
      for (let i = 0; i != buf1.byteLength; i++) if (dv1[i] != dv2[i]) return false;
      return true;
    }
    error(args) {
      this._fireConsumer('$mediaplayerError', args);
      this._setState('');
      return '';
    }
    loadeddata(args) {
      this._fireConsumer('$mediaplayerLoadedData', args);
    }
    play(args) {
      this._fireConsumer('$mediaplayerPlay', args);
    }
    playing(args) {
      this._fireConsumer('$mediaplayerPlaying', args);
      this._setState('Playing');
    }
    canplay(args) {
      this.videoEl.play();
      this._fireConsumer('$mediaplayerStart', args);
    }
    loadstart(args) {
      this._fireConsumer('$mediaplayerLoad', args);
    }
    seeked() {
      this._fireConsumer('$mediaplayerSeeked', {
        currentTime: this.videoEl.currentTime,
        duration: this.videoEl.duration || 1
      });
    }
    seeking() {
      this._fireConsumer('$mediaplayerSeeking', {
        currentTime: this.videoEl.currentTime,
        duration: this.videoEl.duration || 1
      });
    }
    durationchange(args) {
      this._fireConsumer('$mediaplayerDurationChange', args);
    }
    encrypted(args) {
      const video = args.videoElement;
      const event = args.event;
      // FIXME: Double encrypted events need to be properly filtered by Gstreamer
      if (video.mediaKeys && !this._equalInitData(this._previousInitData, event.initData)) {
        this._previousInitData = event.initData;
        this._fireConsumer('$mediaplayerEncrypted', args);
      }
    }
    static _states() {
      return [class Playing extends this {
        $enter() {
          this._startUpdatingVideoTexture();
        }
        $exit() {
          this._stopUpdatingVideoTexture();
        }
        timeupdate() {
          this._fireConsumer('$mediaplayerProgress', {
            currentTime: this.videoEl.currentTime,
            duration: this.videoEl.duration || 1
          });
        }
        ended(args) {
          this._fireConsumer('$mediaplayerEnded', args);
          this._setState('');
        }
        pause(args) {
          this._fireConsumer('$mediaplayerPause', args);
          this._setState('Playing.Paused');
        }
        _clearSrc() {
          this._fireConsumer('$mediaplayerStop', {});
          this._setState('');
        }
        static _states() {
          return [class Paused extends this {}];
        }
      }];
    }
  }

  class localCookie {
    constructor(e) {
      return e = e || {}, this.forceCookies = e.forceCookies || !1, !0 === this._checkIfLocalStorageWorks() && !0 !== e.forceCookies ? {
        getItem: this._getItemLocalStorage,
        setItem: this._setItemLocalStorage,
        removeItem: this._removeItemLocalStorage,
        clear: this._clearLocalStorage,
        keys: this._getLocalStorageKeys
      } : {
        getItem: this._getItemCookie,
        setItem: this._setItemCookie,
        removeItem: this._removeItemCookie,
        clear: this._clearCookies,
        keys: this._getCookieKeys
      };
    }
    _checkIfLocalStorageWorks() {
      if ("undefined" == typeof localStorage) return !1;
      try {
        return localStorage.setItem("feature_test", "yes"), "yes" === localStorage.getItem("feature_test") && (localStorage.removeItem("feature_test"), !0);
      } catch (e) {
        return !1;
      }
    }
    _getItemLocalStorage(e) {
      return window.localStorage.getItem(e);
    }
    _setItemLocalStorage(e, t) {
      return window.localStorage.setItem(e, t);
    }
    _removeItemLocalStorage(e) {
      return window.localStorage.removeItem(e);
    }
    _clearLocalStorage() {
      return window.localStorage.clear();
    }
    _getLocalStorageKeys() {
      return Object.keys(window.localStorage);
    }
    _getItemCookie(e) {
      var t = document.cookie.match(RegExp("(?:^|;\\s*)" + function (e) {
        return e.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1");
      }(e) + "=([^;]*)"));
      return t && "" === t[1] && (t[1] = null), t ? t[1] : null;
    }
    _setItemCookie(e, t) {
      var o = new Date(),
        r = new Date(o.getTime() + 15768e7);
      document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(r.toUTCString(), ";");
    }
    _removeItemCookie(e) {
      document.cookie = "".concat(e, "=;Max-Age=-99999999;");
    }
    _clearCookies() {
      document.cookie.split(";").forEach(e => {
        document.cookie = e.replace(/^ +/, "").replace(/=.*/, "=;expires=Max-Age=-99999999");
      });
    }
    _getCookieKeys() {
      return document.cookie.split(";").map(e => e.split("=")[0]);
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initStorage = () => {
    Settings$2.get('platform', 'id');
    // todo: pass options (for example to force the use of cookies)
    new localCookie();
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const hasRegex = /\{\/(.*?)\/([igm]{0,3})\}/g;
  const isWildcard = /^[!*$]$/;
  const hasLookupId = /\/:\w+?@@([0-9]+?)@@/;
  const isNamedGroup = /^\/:/;

  /**
   * Test if a route is part regular expressed
   * and replace it for a simple character
   * @param route
   * @returns {*}
   */
  const stripRegex = function (route) {
    let char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'R';
    // if route is part regular expressed we replace
    // the regular expression for a character to
    // simplify floor calculation and backtracking
    if (hasRegex.test(route)) {
      route = route.replace(hasRegex, char);
    }
    return route;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Create a local request register
   * @param flags
   * @returns {Map<any, any>}
   */
  const createRegister = flags => {
    const reg = new Map()
    // store user defined and router
    // defined flags in register
    ;
    [...Object.keys(flags), ...Object.getOwnPropertySymbols(flags)].forEach(key => {
      reg.set(key, flags[key]);
    });
    return reg;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class Request {
    constructor() {
      let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      let navArgs = arguments.length > 1 ? arguments[1] : undefined;
      let storeCaller = arguments.length > 2 ? arguments[2] : undefined;
      /**
       * Hash we navigate to
       * @type {string}
       * @private
       */
      this._hash = hash;

      /**
       * Do we store previous hash in history
       * @type {boolean}
       * @private
       */
      this._storeCaller = storeCaller;

      /**
       * Request and navigate data
       * @type {Map}
       * @private
       */
      this._register = new Map();

      /**
       * Flag if the instance is created due to
       * this request
       * @type {boolean}
       * @private
       */
      this._isCreated = false;

      /**
       * Flag if the instance is shared between
       * previous and current request
       * @type {boolean}
       * @private
       */
      this._isSharedInstance = false;

      /**
       * Flag if the request has been cancelled
       * @type {boolean}
       * @private
       */
      this._cancelled = false;

      /**
       * if instance is shared between requests we copy state object
       * from instance before the new request overrides state
       * @type {null}
       * @private
       */
      this._copiedHistoryState = null;

      // if there are arguments attached to navigate()
      // we store them in new request
      if (isObject(navArgs)) {
        this._register = createRegister(navArgs);
      } else if (isBoolean(navArgs)) {
        // if second navigate() argument is explicitly
        // set to false we prevent the calling page
        // from ending up in history
        this._storeCaller = navArgs;
      }
      // @todo: remove because we can simply check
      // ._storeCaller property
      this._register.set(symbols.store, this._storeCaller);
    }
    cancel() {
      Log$1.debug('[router]:', "cancelled ".concat(this._hash));
      this._cancelled = true;
    }
    get url() {
      return this._hash;
    }
    get register() {
      return this._register;
    }
    get hash() {
      return this._hash;
    }
    set hash(args) {
      this._hash = args;
    }
    get route() {
      return this._route;
    }
    set route(args) {
      this._route = args;
    }
    get provider() {
      return this._provider;
    }
    set provider(args) {
      this._provider = args;
    }
    get providerType() {
      return this._providerType;
    }
    set providerType(args) {
      this._providerType = args;
    }
    set page(args) {
      this._page = args;
    }
    get page() {
      return this._page;
    }
    set isCreated(args) {
      this._isCreated = args;
    }
    get isCreated() {
      return this._isCreated;
    }
    get isSharedInstance() {
      return this._isSharedInstance;
    }
    set isSharedInstance(args) {
      this._isSharedInstance = args;
    }
    get isCancelled() {
      return this._cancelled;
    }
    set copiedHistoryState(v) {
      this._copiedHistoryState = v;
    }
    get copiedHistoryState() {
      return this._copiedHistoryState;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class Route {
    constructor() {
      let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // keep backwards compatible
      let type = ['on', 'before', 'after'].reduce((acc, type) => {
        return isFunction(config[type]) ? type : acc;
      }, undefined);
      this._cfg = config;
      if (type) {
        this._provider = {
          type,
          request: config[type]
        };
      }
    }
    get path() {
      return this._cfg.path;
    }
    get name() {
      return this._cfg.name;
    }
    get component() {
      return this._cfg.component;
    }
    get options() {
      return this._cfg.options;
    }
    get widgets() {
      return this._cfg.widgets;
    }
    get cache() {
      return this._cfg.cache;
    }
    get hook() {
      return this._cfg.hook;
    }
    get beforeNavigate() {
      return this._cfg.beforeNavigate;
    }
    get provider() {
      return this._provider;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Simple route length calculation
   * @param route {string}
   * @returns {number} - floor
   */
  const getFloor = route => {
    return stripRegex(route).split('/').length;
  };

  /**
   * return all stored routes that live on the same floor
   * @param floor
   * @returns {Array}
   */
  const getRoutesByFloor = floor => {
    const matches = [];
    // simple filter of level candidates
    for (let [route] of routes.entries()) {
      if (getFloor(route) === floor) {
        matches.push(route);
      }
    }
    return matches;
  };

  /**
   * return a matching route by provided hash
   * hash: home/browse/12 will match:
   * route: home/browse/:categoryId
   * @param hash {string}
   * @returns {boolean|{}} - route
   */
  const getRouteByHash = hash => {
    // @todo: clean up on handleHash
    hash = hash.replace(/^#/, '');
    const getUrlParts = /(\/?:?[^/]+)/g;
    // grab possible candidates from stored routes
    const candidates = getRoutesByFloor(getFloor(hash));
    // break hash down in chunks
    const hashParts = hash.match(getUrlParts) || [];

    // to simplify the route matching and prevent look around
    // in our getUrlParts regex we get the regex part from
    // route candidate and store them so that we can reference
    // them when we perform the actual regex against hash
    let regexStore = [];
    let matches = candidates.filter(route => {
      let isMatching = true;
      // replace regex in route with lookup id => @@{storeId}@@
      if (hasRegex.test(route)) {
        const regMatches = route.match(hasRegex);
        if (regMatches && regMatches.length) {
          route = regMatches.reduce((fullRoute, regex) => {
            const lookupId = regexStore.length;
            fullRoute = fullRoute.replace(regex, "@@".concat(lookupId, "@@"));
            regexStore.push(regex.substring(1, regex.length - 1));
            return fullRoute;
          }, route);
        }
      }
      const routeParts = route.match(getUrlParts) || [];
      for (let i = 0, j = routeParts.length; i < j; i++) {
        const routePart = routeParts[i];
        const hashPart = hashParts[i];

        // Since we support catch-all and regex driven name groups
        // we first test for regex lookup id and see if the regex
        // matches the value from the hash
        if (hasLookupId.test(routePart)) {
          const routeMatches = hasLookupId.exec(routePart);
          const storeId = routeMatches[1];
          const routeRegex = regexStore[storeId];

          // split regex and modifiers so we can use both
          // to create a new RegExp
          // eslint-disable-next-line
          const regMatches = /\/([^\/]+)\/([igm]{0,3})/.exec(routeRegex);
          if (regMatches && regMatches.length) {
            const expression = regMatches[1];
            const modifiers = regMatches[2];
            const regex = new RegExp("^/".concat(expression, "$"), modifiers);
            if (!regex.test(hashPart)) {
              isMatching = false;
            }
          }
        } else if (isNamedGroup.test(routePart)) {
          // we kindly skip namedGroups because this is dynamic
          // we only need to the static and regex drive parts
          continue;
        } else if (hashPart && routePart.toLowerCase() !== hashPart.toLowerCase()) {
          isMatching = false;
        }
      }
      return isMatching;
    });
    if (matches.length) {
      if (matches.indexOf(hash) !== -1) {
        const match = matches[matches.indexOf(hash)];
        return routes.get(match);
      } else {
        // we give prio to static routes over dynamic
        matches = matches.sort(a => {
          return isNamedGroup.test(a) ? -1 : 1;
        });
        // would be strange if this fails
        // but still we test
        if (routeExists(matches[0])) {
          return routes.get(matches[0]);
        }
      }
    }
    return false;
  };
  const getValuesFromHash = function () {
    let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let path = arguments.length > 1 ? arguments[1] : undefined;
    // replace the regex definition from the route because
    // we already did the matching part
    path = stripRegex(path, '');
    const getUrlParts = /(\/?:?[\w%\s:.-]+)/g;
    const hashParts = hash.match(getUrlParts) || [];
    const routeParts = path.match(getUrlParts) || [];
    const getNamedGroup = /^\/:([\w-]+)\/?/;
    return routeParts.reduce((storage, value, index) => {
      const match = getNamedGroup.exec(value);
      if (match && match.length) {
        storage.set(match[1], decodeURIComponent(hashParts[index].replace(/^\//, '')));
      }
      return storage;
    }, new Map());
  };
  const getOption = (stack, prop) => {
    // eslint-disable-next-line
    if (stack && stack.hasOwnProperty(prop)) {
      return stack[prop];
    }
    // we explicitly return undefined since we're testing
    // for explicit test values
  };

  /**
   * create and return new Route instance
   * @param config
   */
  const createRoute = config => {
    // we need to provide a bit of additional logic
    // for the bootComponent
    if (config.path === '$') {
      let options = {
        preventStorage: true
      };
      if (isObject(config.options)) {
        options = {
          ...config.options,
          ...options
        };
      }
      config.options = options;
      // if configured add reference to bootRequest
      // as router after provider
      if (bootRequest) {
        config.after = bootRequest;
      }
    }
    return new Route(config);
  };

  /**
   * Create a new Router request object
   * @param url
   * @param args
   * @param store
   * @returns {*}
   */
  const createRequest = (url, args, store) => {
    return new Request(url, args, store);
  };
  const getHashByName = obj => {
    if (!obj.to && !obj.name) {
      return false;
    }
    const route = getRouteByName(obj.to || obj.name);
    const hasDynamicGroup = /\/:([\w-]+)\/?/;
    let hash = route;

    // if route contains dynamic group
    // we replace them with the provided params
    if (hasDynamicGroup.test(route)) {
      if (obj.params) {
        const keys = Object.keys(obj.params);
        hash = keys.reduce((acc, key) => {
          return acc.replace(":".concat(key), obj.params[key]);
        }, route);
      }
      if (obj.query) {
        return "".concat(hash).concat(objectToQueryString(obj.query));
      }
    }
    return hash;
  };
  const getRouteByName = name => {
    for (let [path, route] of routes.entries()) {
      if (route.name === name) {
        return path;
      }
    }
    return false;
  };
  const keepActivePageAlive = (route, request) => {
    if (isString(route)) {
      const routes = getRoutes();
      if (routes.has(route)) {
        route = routes.get(route);
      } else {
        return false;
      }
    }
    const register = request.register;
    const routeOptions = route.options;
    if (register.has('keepAlive')) {
      return register.get('keepAlive');
    } else if (routeOptions && routeOptions.keepAlive) {
      return routeOptions.keepAlive;
    }
    return false;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var emit$2 = (function (page) {
    let events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!isArray(events)) {
      events = [events];
    }
    events.forEach(e => {
      const event = "_on".concat(ucfirst(e));
      if (isFunction(page[event])) {
        page[event](params);
      }
    });
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let activeWidget = null;
  const getReferences = () => {
    if (!widgetsHost) {
      return;
    }
    return widgetsHost.get().reduce((storage, widget) => {
      const key = widget.ref.toLowerCase();
      storage[key] = widget;
      return storage;
    }, {});
  };

  /**
   * update the visibility of the available widgets
   * for the current page / route
   * @param page
   */
  const updateWidgets = (widgets, page) => {
    // force lowercase lookup
    const configured = (widgets || []).map(ref => ref.toLowerCase());
    widgetsHost.forEach(widget => {
      widget.visible = configured.indexOf(widget.ref.toLowerCase()) !== -1;
      if (widget.visible) {
        emit$2(widget, ['activated'], page);
      }
    });
    if (app.state === 'Widgets' && activeWidget && !activeWidget.visible) {
      app._setState('');
    }
  };
  const getWidgetByName = name => {
    name = ucfirst(name);
    return widgetsHost.getByRef(name) || false;
  };

  /**
   * delegate app focus to a on-screen widget
   * @param name - {string}
   */
  const focusWidget = name => {
    const widget = getWidgetByName(name);
    if (widget) {
      setActiveWidget(widget);

      // if app is already in 'Widgets' state we can assume that
      // focus has been delegated from one widget to another so
      // we need to set the new widget reference and trigger a
      // new focus calculation of Lightning's focuspath
      if (app.state === 'Widgets') {
        app.reload(activeWidget);
      } else {
        app._setState('Widgets', [activeWidget]);
      }
    }
  };
  const restoreFocus = () => {
    activeWidget = null;
    app._setState('');
  };
  const getActiveWidget = () => {
    return activeWidget;
  };
  const setActiveWidget = instance => {
    activeWidget = instance;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const createComponent = (stage, type) => {
    return stage.c({
      type,
      visible: false,
      widgets: getReferences()
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Simple flat array that holds the visited hashes + state Object
   * so the router can navigate back to them
   * @type {Array}
   */
  let history = [];
  const updateHistory = request => {
    const hash = getActiveHash();
    if (!hash) {
      return;
    }

    // navigate storage flag
    const register = request.register;
    const forceNavigateStore = register.get(symbols.store);

    // test preventStorage on route configuration
    const activeRoute = getRouteByHash(hash);
    const preventStorage = getOption(activeRoute.options, 'preventStorage');

    // we give prio to navigate storage flag
    let store = isBoolean(forceNavigateStore) ? forceNavigateStore : !preventStorage;
    if (store) {
      const toStore = hash.replace(/^\//, '');
      const location = locationInHistory(toStore);
      const stateObject = getStateObject(getActivePage(), request);
      const routerConfig = getRouterConfig();

      // store hash if it's not a part of history or flag for
      // storage of same hash is true
      if (location === -1 || routerConfig.get('storeSameHash')) {
        history.push({
          hash: toStore,
          state: stateObject
        });
      } else {
        // if we visit the same route we want to sync history
        const prev = history.splice(location, 1)[0];
        history.push({
          hash: prev.hash,
          state: stateObject
        });
      }
    }
  };
  const locationInHistory = hash => {
    for (let i = 0; i < history.length; i++) {
      if (history[i].hash === hash) {
        return i;
      }
    }
    return -1;
  };
  const getHistoryState = hash => {
    let state = null;
    if (history.length) {
      // if no hash is provided we get the last
      // pushed history record
      if (!hash) {
        const record = history[history.length - 1];
        // could be null
        state = record.state;
      } else {
        if (locationInHistory(hash) !== -1) {
          const record = history[locationInHistory(hash)];
          state = record.state;
        }
      }
    }
    return state;
  };
  const replaceHistoryState = function () {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let hash = arguments.length > 1 ? arguments[1] : undefined;
    if (!history.length) {
      return;
    }
    const location = hash ? locationInHistory(hash) : history.length - 1;
    if (location !== -1 && isObject(state)) {
      history[location].state = state;
    }
  };
  const getStateObject = (page, request) => {
    // if the new request shared instance with the
    // previous request we used the copied state object
    if (request.isSharedInstance) {
      if (request.copiedHistoryState) {
        return request.copiedHistoryState;
      }
    } else if (page && isFunction(page.historyState)) {
      return page.historyState();
    }
    return null;
  };
  const getHistory = () => {
    return history.slice(0);
  };
  const setHistory = function () {
    let arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (isArray(arr)) {
      history = arr;
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @type {Lightning.Application}
   */
  let application;

  /**
   * Actual instance of the app
   * @type {Lightning.Component}
   */
  let app;

  /**
   * Component that hosts all routed pages
   * @type {Lightning.Component}
   */
  let pagesHost;

  /**
   * @type {Lightning.Stage}
   */
  let stage;

  /**
   * Platform driven Router configuration
   * @type {Map<string>}
   */
  let routerConfig;

  /**
   * Component that hosts all attached widgets
   * @type {Lightning.Component}
   */
  let widgetsHost;

  /**
   * Hash we point the browser to when we boot the app
   * and there is no deep-link provided
   * @type {string|Function}
   */
  let rootHash;

  /**
   * Boot request will fire before app start
   * can be used to execute some global logic
   * and can be configured
   */
  let bootRequest;

  /**
   * Flag if we need to update the browser location hash.
   * Router can work without.
   * @type {boolean}
   */
  let updateHash = true;

  /**
   * Will be called before a route starts, can be overridden
   * via routes config
   * @param from - route we came from
   * @param to - route we navigate to
   * @returns {Promise<*>}
   */
  // eslint-disable-next-line
  let beforeEachRoute = async (from, to) => {
    return true;
  };

  /**
   *  * Will be called after a navigate successfully resolved,
   * can be overridden via routes config
   */
  let afterEachRoute = () => {};

  /**
   * All configured routes
   * @type {Map<string, object>}
   */
  let routes = new Map();

  /**
   * Store all page components per route
   * @type {Map<string, object>}
   */
  let components = new Map();

  /**
   * Flag if router has been initialised
   * @type {boolean}
   */
  let initialised = false;

  /**
   * Current page being rendered on screen
   * @type {null}
   */
  let activePage = null;
  let activeHash;
  let activeRoute;

  /**
   *  During the process of a navigation request a new
   *  request can start, to prevent unwanted behaviour
   *  the navigate()-method stores the last accepted hash
   *  so we can invalidate any prior requests
   */
  let lastAcceptedHash;

  /**
   * With on()-data providing behaviour the Router forced the App
   * in a Loading state. When the data-provider resolves we want to
   * change the state back to where we came from
   */
  let previousState;
  const mixin = app => {
    // by default the Router Baseclass provides the component
    // reference in which we store our pages
    if (app.pages) {
      pagesHost = app.pages.childList;
    }
    // if the app is using widgets we grab refs
    // and hide all the widgets
    if (app.widgets && app.widgets.children) {
      widgetsHost = app.widgets.childList;
      // hide all widgets on boot
      widgetsHost.forEach(w => w.visible = false);
    }
    app._handleBack = e => {
      step(-1);
      e.preventDefault();
    };
  };
  const bootRouter = (config, instance) => {
    let {
      appInstance,
      routes
    } = config;

    // if instance is provided and it's and Lightning Component instance
    if (instance && isPage(instance)) {
      app = instance;
    }
    if (!app) {
      app = appInstance || AppInstance;
    }
    application = app.application;
    pagesHost = application.childList;
    stage = app.stage;
    routerConfig = getConfigMap();
    mixin(app);
    if (isArray(routes)) {
      setup(config);
    } else if (isFunction(routes)) {
      console.warn('[Router]: Calling Router.route() directly is deprecated.');
      console.warn('Use object config: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };
  const setup = config => {
    if (!initialised) {
      init$1(config);
    }
    config.routes.forEach(r => {
      const path = cleanHash(r.path);
      if (!routeExists(path)) {
        const route = createRoute(r);
        routes.set(path, route);
        // if route has a configured component property
        // we store it in a different map to simplify
        // the creating and destroying per route
        if (route.component) {
          let type = route.component;
          if (isComponentConstructor(type)) {
            if (!routerConfig.get('lazyCreate')) {
              type = createComponent(stage, type);
              pagesHost.a(type);
            }
          }
          components.set(path, type);
        }
      } else {
        console.error("".concat(path, " already exists in routes configuration"));
      }
    });
  };
  const init$1 = config => {
    rootHash = config.root;
    if (isFunction(config.boot)) {
      bootRequest = config.boot;
    }
    if (isBoolean(config.updateHash)) {
      updateHash = config.updateHash;
    }
    if (isFunction(config.beforeEachRoute)) {
      beforeEachRoute = config.beforeEachRoute;
    }
    if (isFunction(config.afterEachRoute)) {
      afterEachRoute = config.afterEachRoute;
    }
    if (config.bootComponent) {
      console.warn('[Router]: Boot Component is now available as a special router: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration?id=special-routes');
      console.warn('[Router]: setting { bootComponent } property will be deprecated in a future release');
      if (isPage(config.bootComponent)) {
        config.routes.push({
          path: '$',
          component: config.bootComponent,
          // we try to assign the bootRequest as after data-provider
          // so it will behave as any other component
          after: bootRequest || null,
          options: {
            preventStorage: true
          }
        });
      } else {
        console.error("[Router]: ".concat(config.bootComponent, " is not a valid boot component"));
      }
    }
    config.routes.forEach(item => {
      // replacing regexes with 'R' to avoid issues with pattern matching below
      const strippedPath = stripRegex(item.path);

      // Pattern to identify the last path of the route
      // It should start with "/:" + any word  and ends with "?"
      // It should be the last path of the route
      // valid => /player/:asset/:assetId? (:assetId is optional)
      // invalid => /player/:asset/:assetId?/test (:assetId? is not an optional path)
      // invalid => /player/:asset?/:assetId? (second path is not considered as an optional path)
      const pattern = /.*\/:.*?\?$/u;
      if (pattern.test(strippedPath)) {
        const optionalPath = item.path.substring(0, item.path.lastIndexOf('/'));
        const originalPath = item.path.substring(0, item.path.lastIndexOf('?'));
        item.path = originalPath;
        //Create another entry with the optional path
        let optionalItem = {
          ...item
        };
        optionalItem.path = optionalPath;
        config.routes.push(optionalItem);
      }
    });
    initialised = true;
  };
  const storeComponent = (route, type) => {
    if (components.has(route)) {
      components.set(route, type);
    }
  };
  const getComponent = route => {
    if (components.has(route)) {
      return components.get(route);
    }
    return null;
  };

  // delete existing route instance from memory
  const deleteCurrentInstance = route => {
    if (components.has(route) && pagesHost.getIndex(components.get(route)) !== -1) {
      pagesHost.remove(components.get(route));
      storeComponent(route, components.get(route)._routedType || components.get(route).constructor);
    }
  };

  /**
   * Test if router needs to update browser location hash
   * @returns {boolean}
   */
  const mustUpdateLocationHash = () => {
    if (!routerConfig || !routerConfig.size) {
      return false;
    }
    // we need support to either turn change hash off
    // per platform or per app
    const updateConfig = routerConfig.get('updateHash');
    return !(isBoolean(updateConfig) && !updateConfig || isBoolean(updateHash) && !updateHash);
  };

  /**
   * Will be called when a new navigate() request has completed
   * and has not been expired due to it's async nature
   * @param request
   */
  const onRequestResolved = request => {
    const hash = request.hash;
    const route = request.route;
    const register = request.register;
    const page = request.page;

    // clean up history if modifier is set
    if (getOption(route.options, 'clearHistory')) {
      setHistory([]);
    } else if (hash && !isWildcard.test(route.path)) {
      updateHistory(request);
    }

    // we only update the stackLocation if a route
    // is not expired before it resolves
    storeComponent(route.path, page);
    if (request.isSharedInstance || !request.isCreated) {
      emit$2(page, 'changed');
    } else if (request.isCreated) {
      emit$2(page, 'mounted');
    }

    // only update widgets if we have a host
    if (widgetsHost) {
      updateWidgets(route.widgets, page);
    }

    // we want to clean up if there is an
    // active page that is not being shared
    // between current and previous route
    if (getActivePage() && !request.isSharedInstance) {
      cleanUp(activePage, request);
    }

    // provide history object to active page
    if (register.get(symbols.historyState) && isFunction(page.historyState)) {
      page.historyState(register.get(symbols.historyState));
    }
    setActivePage(page);
    activeHash = request.hash;
    activeRoute = route.path;

    // cleanup all cancelled requests
    for (let request of navigateQueue.values()) {
      if (request.isCancelled && request.hash) {
        navigateQueue.delete(request.hash);
      }
    }
    afterEachRoute(request);
    Log$1.info('[route]:', route.path);
    Log$1.info('[hash]:', hash);
  };
  const cleanUp = (page, request) => {
    const route = activeRoute;
    const register = request.register;
    const lazyDestroy = routerConfig.get('lazyDestroy');
    const destroyOnBack = routerConfig.get('destroyOnHistoryBack');
    const keepAlive = register.get('keepAlive');
    const isFromHistory = register.get(symbols.backtrack);
    let doCleanup = false;

    // if this request is executed due to a step back in history
    // and we have configured to destroy active page when we go back
    // in history or lazyDestory is enabled
    if (isFromHistory && (destroyOnBack || lazyDestroy)) {
      doCleanup = true;
    }

    // clean up if lazyDestroy is enabled and the keepAlive flag
    // in navigation register is false
    if (lazyDestroy && !keepAlive) {
      doCleanup = true;
    }

    // if the current and new request share the same route blueprint
    if (activeRoute === request.route.path) {
      doCleanup = true;
    }
    if (doCleanup) {
      // grab original class constructor if
      // statemachine routed else store constructor
      storeComponent(route, page._routedType || page.constructor);

      // actual remove of page from memory
      pagesHost.remove(page);

      // force texture gc() if configured
      // so we can cleanup textures in the same tick
      if (routerConfig.get('gcOnUnload')) {
        stage.gc();
      }
    } else {
      // If we're not removing the page we need to
      // reset it's properties
      page.patch({
        x: 0,
        y: 0,
        scale: 1,
        alpha: 1,
        visible: false
      });
    }
  };
  const getActiveHash = () => {
    return activeHash;
  };
  const setActivePage = page => {
    activePage = page;
  };
  const getActivePage = () => {
    return activePage;
  };
  const getActiveRoute = () => {
    return activeRoute;
  };
  const getLastHash = () => {
    return lastAcceptedHash;
  };
  const setLastHash = hash => {
    lastAcceptedHash = hash;
  };
  const setPreviousState = state => {
    previousState = state;
  };
  const getPreviousState = () => {
    return previousState;
  };
  const routeExists = key => {
    return routes.has(key);
  };
  const getRootHash = () => {
    return rootHash;
  };
  const getBootRequest = () => {
    return bootRequest;
  };
  const getRouterConfig = () => {
    return routerConfig;
  };
  const getRoutes = () => {
    return routes;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const isFunction = v => {
    return typeof v === 'function';
  };
  const isObject = v => {
    return typeof v === 'object' && v !== null;
  };
  const isBoolean = v => {
    return typeof v === 'boolean';
  };
  const isPage = v => {
    if (v instanceof Lightning$1.Element || isComponentConstructor(v)) {
      return true;
    }
    return false;
  };
  const isComponentConstructor = type => {
    return type.prototype && 'isComponent' in type.prototype;
  };
  const isArray = v => {
    return Array.isArray(v);
  };
  const ucfirst = v => {
    return "".concat(v.charAt(0).toUpperCase()).concat(v.slice(1));
  };
  const isString = v => {
    return typeof v === 'string';
  };
  const isPromise = method => {
    let result;
    if (isFunction(method)) {
      try {
        result = method.apply(null);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }
    return isObject(result) && isFunction(result.then);
  };
  const cleanHash = function () {
    let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return hash.replace(/^#/, '').replace(/\/+$/, '');
  };
  const getConfigMap = () => {
    const routerSettings = Settings$2.get('platform', 'router');
    const isObj = isObject(routerSettings);
    return ['backtrack', 'gcOnUnload', 'destroyOnHistoryBack', 'lazyCreate', 'lazyDestroy', 'reuseInstance', 'autoRestoreRemote', 'numberNavigation', 'updateHash', 'storeSameHash'].reduce((config, key) => {
      config.set(key, isObj ? routerSettings[key] : Settings$2.get('platform', key));
      return config;
    }, new Map());
  };
  const getQueryStringParams = function () {
    let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getActiveHash();
    const resumeHash = getResumeHash();
    if ((hash === '$' || !hash) && resumeHash) {
      if (isString(resumeHash)) {
        hash = resumeHash;
      }
    }
    let parse = '';
    const getQuery = /([?&].*)/;
    const matches = getQuery.exec(hash);
    const params = {};
    if (document.location && document.location.search) {
      parse = document.location.search;
    }
    if (matches && matches.length) {
      let hashParams = matches[1];
      if (parse) {
        // if location.search is not empty we
        // remove the leading ? to create a
        // valid string
        hashParams = hashParams.replace(/^\?/, '');
        // we parse hash params last so they we can always
        // override search params with hash params
        parse = "".concat(parse, "&").concat(hashParams);
      } else {
        parse = hashParams;
      }
    }
    if (parse) {
      const urlParams = new URLSearchParams(parse);
      for (const [key, value] of urlParams.entries()) {
        params[key] = value;
      }
      return params;
    } else {
      return false;
    }
  };
  const objectToQueryString = obj => {
    if (!isObject(obj)) {
      return '';
    }
    return '?' + Object.keys(obj).map(key => {
      return "".concat(key, "=").concat(obj[key]);
    }).join('&');
  };
  const symbols = {
    route: Symbol('route'),
    hash: Symbol('hash'),
    store: Symbol('store'),
    fromHistory: Symbol('fromHistory'),
    expires: Symbol('expires'),
    resume: Symbol('resume'),
    backtrack: Symbol('backtrack'),
    historyState: Symbol('historyState'),
    queryParams: Symbol('queryParams')
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const dataHooks = {
    on: request => {
      setPreviousState(app.state || '');
      app._setState('Loading');
      return execProvider(request);
    },
    before: request => {
      return execProvider(request);
    },
    after: request => {
      try {
        execProvider(request, true);
      } catch (e) {
        // for now we fail silently
      }
      return Promise.resolve();
    }
  };
  const execProvider = (request, emitProvided) => {
    const route = request.route;
    const provider = route.provider;
    const expires = route.cache ? route.cache * 1000 : 0;
    const params = addPersistData(request);
    return provider.request(request.page, {
      ...params
    }).then(() => {
      request.page[symbols.expires] = Date.now() + expires;
      if (emitProvided) {
        emit$2(request.page, 'dataProvided');
      }
    }).catch(e => {
      request.page[symbols.expires] = Date.now();
      throw e;
    });
  };
  const addPersistData = _ref => {
    let {
      page,
      route,
      hash,
      register = new Map()
    } = _ref;
    const urlValues = getValuesFromHash(hash, route.path);
    const queryParams = getQueryStringParams(hash);
    const pageData = new Map([...urlValues, ...register]);
    const params = {};

    // make dynamic url data available to the page
    // as instance properties
    for (let [name, value] of pageData) {
      params[name] = value;
    }
    if (queryParams) {
      params[symbols.queryParams] = queryParams;
    }

    // check navigation register for persistent data
    if (register.size) {
      const obj = {};
      for (let [k, v] of register) {
        obj[k] = v;
      }
      page.persist = obj;
    }

    // make url data and persist data available
    // via params property
    page.params = params;
    emit$2(page, ['urlParams'], params);
    return params;
  };

  /**
   * Test if page passed cache-time
   * @param page
   * @returns {boolean}
   */
  const isPageExpired = page => {
    if (!page[symbols.expires]) {
      return false;
    }
    const expires = page[symbols.expires];
    const now = Date.now();
    return now >= expires;
  };
  const hasProvider = path => {
    if (routeExists(path)) {
      const record = routes.get(path);
      return !!record.provider;
    }
    return false;
  };
  const getProvider = route => {
    // @todo: fix, route already is passed in
    if (routeExists(route.path)) {
      const {
        provider
      } = routes.get(route.path);
      return {
        type: provider.type,
        provider: provider.request
      };
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const fade = (i, o) => {
    return new Promise(resolve => {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });
      // resolve on y finish
      i.transition('alpha').on('finish', () => {
        if (o) {
          o.visible = false;
        }
        resolve();
      });
    });
  };
  const crossFade = (i, o) => {
    return new Promise(resolve => {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });
      if (o) {
        o.patch({
          smooth: {
            alpha: [0, {
              duration: 0.5,
              delay: 0.3
            }]
          }
        });
      }
      // resolve on y finish
      i.transition('alpha').on('finish', () => {
        resolve();
      });
    });
  };
  const moveOnAxes = (axis, direction, i, o) => {
    const bounds = axis === 'x' ? 1920 : 1080;
    return new Promise(resolve => {
      i.patch({
        ["".concat(axis)]: direction ? bounds * -1 : bounds,
        visible: true,
        smooth: {
          ["".concat(axis)]: [0, {
            duration: 0.4,
            delay: 0.2
          }]
        }
      });
      // out is optional
      if (o) {
        o.patch({
          ["".concat(axis)]: 0,
          smooth: {
            ["".concat(axis)]: [direction ? bounds : bounds * -1, {
              duration: 0.4,
              delay: 0.2
            }]
          }
        });
      }
      // resolve on y finish
      i.transition(axis).on('finish', () => {
        resolve();
      });
    });
  };
  const up = (i, o) => {
    return moveOnAxes('y', 0, i, o);
  };
  const down = (i, o) => {
    return moveOnAxes('y', 1, i, o);
  };
  const left = (i, o) => {
    return moveOnAxes('x', 0, i, o);
  };
  const right = (i, o) => {
    return moveOnAxes('x', 1, i, o);
  };
  var Transitions = {
    fade,
    crossFade,
    up,
    down,
    left,
    right
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * execute transition between new / old page and
   * toggle the defined widgets
   * @todo: platform override default transition
   * @param pageIn
   * @param pageOut
   */
  const executeTransition = function (pageIn) {
    let pageOut = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const transition = pageIn.pageTransition || pageIn.easing;
    const hasCustomTransitions = !!(pageIn.smoothIn || pageIn.smoothInOut || transition);
    const transitionsDisabled = getRouterConfig().get('disableTransitions');
    if (pageIn.easing) {
      console.warn('easing() method is deprecated and will be removed. Use pageTransition()');
    }

    // default behaviour is a visibility toggle
    if (!hasCustomTransitions || transitionsDisabled) {
      pageIn.visible = true;
      if (pageOut) {
        pageOut.visible = false;
      }
      return Promise.resolve();
    }
    if (transition) {
      let type;
      try {
        type = transition.call(pageIn, pageIn, pageOut);
      } catch (e) {
        type = 'crossFade';
      }
      if (isPromise(type)) {
        return type;
      }
      if (isString(type)) {
        const fn = Transitions[type];
        if (fn) {
          return fn(pageIn, pageOut);
        }
      }

      // keep backwards compatible for now
      if (pageIn.smoothIn) {
        // provide a smooth function that resolves itself
        // on transition finish
        const smooth = function (p, v) {
          let args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return new Promise(resolve => {
            pageIn.visible = true;
            pageIn.setSmooth(p, v, args);
            pageIn.transition(p).on('finish', () => {
              resolve();
            });
          });
        };
        return pageIn.smoothIn({
          pageIn,
          smooth
        });
      }
    }
    return Transitions.crossFade(pageIn, pageOut);
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * The actual loading of the component
   * */
  const load = async request => {
    let expired = false;
    try {
      request = await loader(request);
      if (request && !request.isCancelled) {
        // in case of on() providing we need to reset
        // app state;
        if (app.state === 'Loading') {
          if (getPreviousState() === 'Widgets') {
            app._setState('Widgets', [getActiveWidget()]);
          } else {
            app._setState('');
          }
        }
        // Do page transition if instance
        // is not shared between the routes
        if (!request.isSharedInstance && !request.isCancelled) {
          await executeTransition(request.page, getActivePage());
        }
      } else {
        expired = true;
      }
      // on expired we only cleanup
      if (expired || request.isCancelled) {
        Log$1.debug('[router]:', "Rejected ".concat(request.hash, " because route to ").concat(getLastHash(), " started"));
        if (request.isCreated && !request.isSharedInstance) {
          // remove from render-tree
          pagesHost.remove(request.page);
        }
      } else {
        onRequestResolved(request);
        // resolve promise
        return request.page;
      }
    } catch (request) {
      if (!request.route) {
        console.error(request);
      } else if (!expired) {
        // @todo: revisit
        const {
          route
        } = request;
        // clean up history if modifier is set
        if (getOption(route.options, 'clearHistory')) {
          setHistory([]);
        } else if (!isWildcard.test(route.path)) {
          updateHistory(request);
        }
        if (request.isCreated && !request.isSharedInstance) {
          // remove from render-tree
          pagesHost.remove(request.page);
        }
        handleError(request);
      }
    }
  };
  const loader = async request => {
    const route = request.route;
    const hash = request.hash;
    const register = request.register;

    // todo: grab from Route instance
    let type = getComponent(route.path);
    let isConstruct = isComponentConstructor(type);
    let provide = false;

    // if it's an instance bt we're not coming back from
    // history we test if we can re-use this instance
    if (!isConstruct && !register.get(symbols.backtrack)) {
      if (!mustReuse(route)) {
        type = type.constructor;
        isConstruct = true;
      }
    }

    // If page is Lightning Component instance
    if (!isConstruct) {
      request.page = type;
      // if we have have a data route for current page
      if (hasProvider(route.path)) {
        if (isPageExpired(type) || type[symbols.hash] !== hash) {
          provide = true;
        }
      }
      let currentRoute = getActivePage() && getActivePage()[symbols.route];
      // if the new route is equal to the current route it means that both
      // route share the Component instance and stack location / since this case
      // is conflicting with the way before() and after() loading works we flag it,
      // and check platform settings in we want to re-use instance
      if (route.path === currentRoute) {
        request.isSharedInstance = true;
        // since we're re-using the instance we must attach
        // historyState to the request to prevent it from
        // being overridden.
        if (isFunction(request.page.historyState)) {
          request.copiedHistoryState = request.page.historyState();
        }
      }
    } else {
      request.page = createComponent(stage, type);
      pagesHost.a(request.page);
      // test if need to request data provider
      if (hasProvider(route.path)) {
        provide = true;
      }
      request.isCreated = true;
    }

    // we store hash and route as properties on the page instance
    // that way we can easily calculate new behaviour on page reload
    request.page[symbols.hash] = hash;
    request.page[symbols.route] = route.path;
    try {
      if (provide) {
        // extract attached data-provider for route
        // we're processing
        const {
          type: loadType,
          provider
        } = getProvider(route);

        // update running request
        request.provider = provider;
        request.providerType = loadType;
        await dataHooks[loadType](request);

        // we early exit if the current request is expired
        if (hash !== getLastHash()) {
          return false;
        } else {
          if (request.providerType !== 'after') {
            emit$2(request.page, 'dataProvided');
          }
          // resolve promise
          return request;
        }
      } else {
        addPersistData(request);
        return request;
      }
    } catch (e) {
      request.error = e;
      return Promise.reject(request);
    }
  };
  const handleError = request => {
    if (request && request.error) {
      console.error(request.error);
    } else if (request) {
      Log$1.error(request);
    }
    if (request.page && routeExists('!')) {
      navigate('!', {
        request
      }, false);
    }
  };
  const mustReuse = route => {
    const opt = getOption(route.options, 'reuseInstance');
    const config = routerConfig.get('reuseInstance');

    // route always has final decision
    if (isBoolean(opt)) {
      return opt;
    }
    return !(isBoolean(config) && config === false);
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class RoutedApp extends Lightning$1.Component {
    static _template() {
      return {
        Pages: {
          forceZIndexContext: true
        },
        /**
         * This is a default Loading page that will be made visible
         * during data-provider on() you CAN override in child-class
         */
        Loading: {
          rect: true,
          w: 1920,
          h: 1080,
          color: 0xff000000,
          visible: false,
          zIndex: 99,
          Label: {
            mount: 0.5,
            x: 960,
            y: 540,
            text: {
              text: 'Loading..'
            }
          }
        }
      };
    }
    static _states() {
      return [class Loading extends this {
        $enter() {
          this.tag('Loading').visible = true;
        }
        $exit() {
          this.tag('Loading').visible = false;
        }
      }, class Widgets extends this {
        $enter(args, widget) {
          // store widget reference
          this._widget = widget;

          // since it's possible that this behaviour
          // is non-remote driven we force a recalculation
          // of the focuspath
          this._refocus();
        }
        _getFocused() {
          // we delegate focus to selected widget
          // so it can consume remotecontrol presses
          return this._widget;
        }

        // if we want to widget to widget focus delegation
        reload(widget) {
          this._widget = widget;
          this._refocus();
        }
        _handleKey() {
          const restoreFocus = routerConfig.get('autoRestoreRemote');
          /**
           * The Router used to delegate focus back to the page instance on
           * every unhandled key. This is barely usefull in any situation
           * so for now we offer the option to explicity turn that behaviour off
           * so we don't don't introduce a breaking change.
           */
          if (!isBoolean(restoreFocus) || restoreFocus === true) {
            Router.focusPage();
          }
        }
      }];
    }

    /**
     * Return location where pages need to be stored
     */
    get pages() {
      return this.tag('Pages');
    }

    /**
     * Tell router where widgets are stored
     */
    get widgets() {
      return this.tag('Widgets');
    }

    /**
     * we MUST register _handleBack method so the Router
     * can override it
     * @private
     */
    _handleBack() {}

    /**
     * We MUST return Router.activePage() so the new Page
     * can listen to the remote-control.
     */
    _getFocused() {
      return Router.getActivePage();
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
  rouThor ==[x]
   */
  let navigateQueue = new Map();
  let forcedHash = '';
  let resumeHash = '';

  /**
   * Start routing the app
   * @param config - route config object
   * @param instance - instance of the app
   */
  const startRouter = (config, instance) => {
    bootRouter(config, instance);
    registerListener();
    start();
  };

  // start translating url
  const start = () => {
    let hash = (getHash() || '').replace(/^#/, '');
    const bootKey = '$';
    const params = getQueryStringParams(hash);
    const bootRequest = getBootRequest();
    const rootHash = getRootHash();
    const isDirectLoad = hash.indexOf(bootKey) !== -1;

    // prevent direct reload of wildcard routes
    // expect bootComponent
    if (isWildcard.test(hash) && hash !== bootKey) {
      hash = '';
    }

    // store resume point for manual resume
    resumeHash = isDirectLoad ? rootHash : hash || rootHash;
    const ready = () => {
      if (!hash && rootHash) {
        if (isString(rootHash)) {
          navigate(rootHash);
        } else if (isFunction(rootHash)) {
          rootHash().then(res => {
            if (isObject(res)) {
              navigate(res.path, res.params);
            } else {
              navigate(res);
            }
          });
        }
      } else {
        queue(hash);
        handleHashChange().then(() => {
          app._refocus();
        }).catch(e => {
          console.error(e);
        });
      }
    };
    if (routeExists(bootKey)) {
      if (hash && !isDirectLoad) {
        if (!getRouteByHash(hash)) {
          navigate('*', {
            failedHash: hash
          });
          return;
        }
      }
      navigate(bootKey, {
        resume: resumeHash,
        reload: bootKey === hash
      }, false);
    } else if (isFunction(bootRequest)) {
      bootRequest(params).then(() => {
        ready();
      }).catch(e => {
        handleBootError(e);
      });
    } else {
      ready();
    }
  };
  const handleBootError = e => {
    if (routeExists('!')) {
      navigate('!', {
        request: {
          error: e
        }
      });
    } else {
      console.error(e);
    }
  };

  /**
   * start a new request
   * @param url
   * @param args
   * @param store
   */
  const navigate = function (url) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let store = arguments.length > 2 ? arguments[2] : undefined;
    if (isObject(url)) {
      url = getHashByName(url);
      if (!url) {
        return;
      }
    }
    let hash = getHash();
    if (!mustUpdateLocationHash() && forcedHash) {
      hash = forcedHash;
    }
    if (hash.replace(/^#/, '') !== url) {
      // push request in the queue
      queue(url, args, store);
      if (mustUpdateLocationHash()) {
        setHash(url);
      } else {
        forcedHash = url;
        handleHashChange(url).then(() => {
          app._refocus();
        }).catch(e => {
          console.error(e);
        });
      }
    } else if (args.reload) {
      // push request in the queue
      queue(url, args, store);
      handleHashChange(url).then(() => {
        app._refocus();
      }).catch(e => {
        console.error(e);
      });
    }
  };
  const queue = function (hash) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let store = arguments.length > 2 ? arguments[2] : undefined;
    hash = cleanHash(hash);
    if (!navigateQueue.has(hash)) {
      for (let request of navigateQueue.values()) {
        request.cancel();
      }
      const request = createRequest(hash, args, store);
      navigateQueue.set(decodeURIComponent(hash), request);
      return request;
    }
    return false;
  };

  /**
   * Handle change of hash
   * @param override
   * @returns {Promise<void>}
   */
  const handleHashChange = async override => {
    const hash = cleanHash(override || getHash());
    const queueId = decodeURIComponent(hash);
    let request = navigateQueue.get(queueId);

    // handle hash updated manually
    if (!request && !navigateQueue.size) {
      request = queue(hash);
    }
    const route = getRouteByHash(hash);
    if (!route) {
      if (routeExists('*')) {
        navigate('*', {
          failedHash: hash
        });
      } else {
        console.error("Unable to navigate to: ".concat(hash));
      }
      return;
    }

    // update current processed request
    request.hash = hash;
    request.route = route;
    let result = await beforeEachRoute(getActiveHash(), request);

    // test if a local hook is configured for the route
    if (result && route.beforeNavigate) {
      result = await route.beforeNavigate(getActiveHash(), request);
    }
    if (isBoolean(result)) {
      // only if resolve value is explicitly true
      // we continue the current route request
      if (result) {
        return resolveHashChange(request);
      }
    } else {
      // if navigation guard didn't return true
      // we cancel the current request
      request.cancel();
      navigateQueue.delete(queueId);
      if (isString(result)) {
        navigate(result);
      } else if (isObject(result)) {
        let store = true;
        if (isBoolean(result.store)) {
          store = result.store;
        }
        navigate(result.path, result.params, store);
      }
    }
  };

  /**
   * Continue processing the hash change if not blocked
   * by global or local hook
   * @param request - {}
   */
  const resolveHashChange = request => {
    const hash = request.hash;
    const route = request.route;
    const queueId = decodeURIComponent(hash);
    // store last requested hash so we can
    // prevent a route that resolved later
    // from displaying itself
    setLastHash(hash);
    if (route.path) {
      const component = getComponent(route.path);
      // if a hook is provided for the current route
      if (isFunction(route.hook)) {
        const urlParams = getValuesFromHash(hash, route.path);
        const params = {};
        for (const key of urlParams.keys()) {
          params[key] = urlParams.get(key);
        }
        route.hook(app, {
          ...params
        });
      }
      // if there is a component attached to the route
      if (component) {
        // force page to root state to prevent shared state issues
        const activePage = getActivePage();
        if (activePage) {
          const keepAlive = keepActivePageAlive(getActiveRoute(), request);
          if (activePage && route.path === getActiveRoute() && !keepAlive) {
            activePage._setState('');
          }
        }
        if (isPage(component)) {
          load(request).then(() => {
            app._refocus();
            navigateQueue.delete(queueId);
          });
        } else {
          // of the component is not a constructor
          // or a Component instance we can assume
          // that it's a dynamic import
          component().then(contents => {
            return contents.default;
          }).then(module => {
            storeComponent(route.path, module);
            return load(request);
          }).then(() => {
            app._refocus();
            navigateQueue.delete(queueId);
          });
        }
      } else {
        navigateQueue.delete(queueId);
      }
    }
  };

  /**
   * Directional step in history
   * @param level
   */
  const step = function () {
    let level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (!level || isNaN(level)) {
      return false;
    }
    const history = getHistory();
    // for now we only support negative numbers
    level = Math.abs(level);

    //Check whether we have any history avaialble or not
    if (history.length) {
      // for now we only support history back
      const route = history.splice(history.length - level, level)[0];
      // store changed history
      setHistory(history);
      return navigate(route.hash, {
        [symbols.backtrack]: true,
        [symbols.historyState]: route.state
      }, false);
    } else if (routerConfig.get('backtrack')) {
      const hashLastPart = /(\/:?[\w%\s-]+)$/;
      let hash = stripRegex(getHash());
      let floor = getFloor(hash);

      // test if we got deep-linked
      if (floor > 1) {
        while (floor--) {
          // strip of last part
          hash = hash.replace(hashLastPart, '');
          // if we have a configured route
          // we navigate to it
          if (getRouteByHash(hash)) {
            return navigate(hash, {
              [symbols.backtrack]: true
            }, false);
          }
        }
      }
    }

    // we can't step back past the amount
    // of history entries
    if (level > history.length) {
      if (isFunction(app._handleAppClose)) {
        return app._handleAppClose();
      }
      return app.application.closeApp();
    }
    return false;
  };

  /**
   * Resume Router's page loading process after
   * the BootComponent became visible;
   */
  const resume = () => {
    if (isString(resumeHash)) {
      navigate(resumeHash, false);
      resumeHash = '';
    } else if (isFunction(resumeHash)) {
      resumeHash().then(res => {
        resumeHash = '';
        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    } else {
      console.warn('[Router]: resume() called but no hash found');
    }
  };

  /**
   * Force reload active hash
   */
  const reload = () => {
    if (!isNavigating()) {
      const hash = getActiveHash();
      navigate(hash, {
        reload: true
      }, false);
    }
  };

  /**
   * Query if the Router is still processing a Request
   * @returns {boolean}
   */
  const isNavigating = () => {
    if (navigateQueue.size) {
      let isProcessing = false;
      for (let request of navigateQueue.values()) {
        if (!request.isCancelled) {
          isProcessing = true;
        }
      }
      return isProcessing;
    }
    return false;
  };
  const getResumeHash = () => {
    return resumeHash;
  };

  /**
   * By default we return the location hash
   * @returns {string}
   */
  let getHash = () => {
    return document.location.hash;
  };

  /**
   * Update location hash
   * @param url
   */
  let setHash = url => {
    document.location.hash = url;
  };

  /**
   * This can be called from the platform / bootstrapper to override
   * the default getting and setting of the hash
   * @param config
   */
  const initRouter = config => {
    if (config.getHash) {
      getHash = config.getHash;
    }
    if (config.setHash) {
      setHash = config.setHash;
    }
  };

  /**
   * On hash change we start processing
   */
  const registerListener = () => {
    Registry.addEventListener(window, 'hashchange', async () => {
      if (mustUpdateLocationHash()) {
        try {
          await handleHashChange();
        } catch (e) {
          console.error(e);
        }
      }
    });
  };

  /**
   * Navigate to root hash
   */
  const root = () => {
    const rootHash = getRootHash();
    if (isString(rootHash)) {
      navigate(rootHash);
    } else if (isFunction(rootHash)) {
      rootHash().then(res => {
        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    }
  };
  const deletePage = param => {
    deleteCurrentInstance(param);
  };

  // export API
  var Router = {
    startRouter,
    navigate,
    resume,
    step,
    go: step,
    back: step.bind(null, -1),
    activePage: getActivePage,
    getActivePage() {
      // warning
      return getActivePage();
    },
    deletePage,
    getActiveRoute,
    getActiveHash,
    focusWidget,
    getActiveWidget,
    restoreFocus,
    isNavigating,
    getHistory,
    setHistory,
    getHistoryState,
    replaceHistoryState,
    getQueryStringParams,
    reload,
    symbols,
    App: RoutedApp,
    // keep backwards compatible
    focusPage: restoreFocus,
    root: root,
    /**
     * Deprecated api methods
     */
    setupRoutes() {
      console.warn('Router: setupRoutes is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    on() {
      console.warn('Router.on() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    before() {
      console.warn('Router.before() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    after() {
      console.warn('Router.after() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let ApplicationInstance;
  var Launch = ((App, appSettings, platformSettings, appData) => {
    initSettings$1(appSettings, platformSettings);
    initUtils(platformSettings);
    initStorage();
    // Initialize plugins
    if (platformSettings.plugins) {
      platformSettings.plugins.profile && initProfile(platformSettings.plugins.profile);
      platformSettings.plugins.metrics && initMetrics(platformSettings.plugins.metrics);
      platformSettings.plugins.mediaPlayer && initMediaPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.mediaPlayer && initVideoPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.ads && initAds(platformSettings.plugins.ads);
      platformSettings.plugins.router && initRouter(platformSettings.plugins.router);
      platformSettings.plugins.tv && initTV(platformSettings.plugins.tv);
      platformSettings.plugins.purchase && initPurchase(platformSettings.plugins.purchase);
      platformSettings.plugins.pin && initPin(platformSettings.plugins.pin);
    }
    const app = Application(App, appData, platformSettings);
    initLightningSdkPlugin.log = Log$1;
    initLightningSdkPlugin.settings = Settings$2;
    initLightningSdkPlugin.ads = Ads;
    initLightningSdkPlugin.lightning = Lightning$1;
    ApplicationInstance = new app(appSettings);
    initLightningSdkPlugin.appInstance = ApplicationInstance;
    return ApplicationInstance;
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class SubtitleComponent extends Lightning$1.Component {
    static _template() {
      return {
        visible: false,
        rect: true,
        color: 0x90000000,
        shader: {
          type: Lightning$1.shaders.RoundedRectangle,
          radius: 5
        },
        Text: {
          y: 5,
          x: 20,
          text: {
            textColor: 0xffffffff,
            fontSize: 38,
            lineHeight: 38 * 1.4,
            textAlign: 'center',
            wordWrap: true,
            maxLines: 3,
            shadow: true,
            shadowColor: 0xff333333
          }
        }
      };
    }
    _init() {
      this._textTextureDefaults = new Lightning$1.textures.TextTexture(this.stage).cloneArgs();
      this.tag('Text').on('txLoaded', _ref => {
        let {
          _source
        } = _ref;
        this.w = _source.w + this.tag('Text').x * 2;
        this.h = _source.h;
        this.position();
      });
    }
    get textFormat() {
      const textTag = this.tag('Text').text;
      return {
        fontFace: textTag.fontFace || 'sans-serif',
        fontSize: textTag.fontSize,
        lineHeight: textTag.lineHeight,
        textAlign: textTag.textAlign,
        wordWrap: true,
        maxLines: textTag.maxLines
      };
    }
    show() {
      this.visible = true;
    }
    hide() {
      this.visible = false;
    }
    position() {
      this.x = this._calculateX(this.xPos);
      this.y = this._calculateY(this.yPos);
    }
    set viewportW(v) {
      this._viewportW = v;
      this.x = this._calculateX(this.xPos);
    }
    get viewportW() {
      return this._viewportW || this.application.finalW;
    }
    set viewportH(v) {
      this._viewportH = v;
      this.y = this._calculateY(this.yPos);
    }
    get viewportH() {
      return this._viewportH || this.application.finalH;
    }
    _calculateX(x) {
      if (x === 'center') {
        x = (this.viewportW - this.finalW) / 2;
      } else if (x === 'left') {
        x = 60;
      } else if (x === 'right') {
        x = this.viewportW - this.finalW - 60;
      }
      return x;
    }
    set xPos(v) {
      this._x = v;
      this.x = this._calculateX(v);
    }
    get xPos() {
      return this._x || 'center';
    }
    _calculateY(y) {
      if (y === 'center') {
        return (this.viewportH - this.finalH) / 2;
      } else if (y === 'top') {
        return 60;
      } else if (y === 'bottom') {
        return this.viewportH - this.finalH - 60;
      }
      return y;
    }
    set yPos(v) {
      this._y = v;
      this.y = this._calculateY(v);
    }
    get yPos() {
      return this._y || 'bottom';
    }
    set fontFamily(v) {
      this.tag('Text').text.fontFace = v;
    }
    set fontSize(v) {
      this.tag('Text').text.fontSize = v;
      this.tag('Text').text.lineHeight = v * 1.3;
    }
    set fontColor(v) {
      this.tag('Text').color = v;
    }
    set backgroundColor(v) {
      this.color = v;
    }
    _defineBreakpoint(text, breakpoint) {
      if (breakpoint >= this.maxWidth) return this.maxWidth;
      const info = Lightning$1.textures.TextTexture.renderer(this.stage, this.stage.platform.getDrawingCanvas(), {
        ...this._textTextureDefaults,
        ...this.textFormat,
        ...{
          wordWrapWidth: breakpoint
        },
        text
      })._calculateRenderInfo();
      if (info.width <= breakpoint && info.lines.length <= 2) {
        return breakpoint;
      } else {
        return this._defineBreakpoint(text, breakpoint * 1.25);
      }
    }
    set text(v) {
      this.alpha = 0;
      if (v && v.length) {
        const breakpoint = this._defineBreakpoint(v, 640);
        this.tag('Text').text.wordWrapWidth = breakpoint;
        this.tag('Text').text = v;
        this.alpha = 1;
      }
    }
    set textAlign(v) {
      this._textAlign = v;
      this.tag('Text').text.textAlign = v;
    }
    set maxWidth(v) {
      this._maxWidth = v;
    }
    get maxWidth() {
      return (this._maxWidth || 1200) - this.tag('Text').x * 2;
    }
    set maxLines(v) {
      this.tag('Text').text.maxLines = v;
    }
  }

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */


  const win$3 = typeof window !== 'undefined' ? window : {};

  let listener;
  const setMockListener = func => { listener = func; };

  let mock$1;
  const pending = [];
  const eventMap = {};

  let callback;
  let testHarness;

  if (win$3.__firebolt && win$3.__firebolt.testHarness) {
    testHarness = win$3.__firebolt.testHarness;
  }

  function send(message) {
    console.debug('Sending message to transport: ' + message);
    let json = JSON.parse(message);

    // handle bulk sends
    if (Array.isArray(json)) {
      json.forEach(j => send(JSON.stringify(j)));
      return
    }

    let [module, method] = json.method.split('.');

    if (testHarness && testHarness.onSend) {
      testHarness.onSend(module, method, json.params, json.id);
    }

    // store the ID of the first listen for each event
    if (method.match(/^on[A-Z]/)) {
      if (json.params.listen) {
        eventMap[json.id] = module.toLowerCase() + '.' + method[2].toLowerCase() + method.substr(3);
      } else {
        Object.keys(eventMap).forEach(key => {
          if (eventMap[key] === module.toLowerCase() + '.' + method[2].toLowerCase() + method.substr(3)) {
            delete eventMap[key];
          }
        });
      }
    }

    if (mock$1)
      handle(json);
    else
      pending.push(json);
  }

  function handle(json) {
    let result;
    try {
      result = getResult(json.method, json.params);
    }
    catch (error) {
      setTimeout(() => callback(JSON.stringify({ 
        jsonrpc: '2.0',
        error: {
          code: -32602,
          message: "Invalid params (this is a mock error from the mock transport layer)"
        },
        id: json.id
      })));
    }

    setTimeout(() => callback(JSON.stringify({ 
      jsonrpc: '2.0',
      result: result,
      id: json.id
    })));
  }

  function receive(_callback) {
    callback = _callback;

    if (testHarness && (typeof testHarness.initialize === 'function')) {
      testHarness.initialize({
        emit: event,
        listen: function(...args) { listener(...args); },
      });
    }
  }

  function event(module, event, value) {
   const listener = Object.entries(eventMap).find(([k, v]) => v.toLowerCase() === module.toLowerCase() + '.' + event.toLowerCase());
    if (listener) {
      let message = JSON.stringify({
        jsonrpc: '2.0',
        id: parseInt(listener[0]),
        result: value
      });
      callback(message);
    }
  }

  function dotGrab$1(obj = {}, key) {
    const keys = key.split('.');
    let ref = obj;
    for (let i = 0; i < keys.length; i++) {
      ref = (Object.entries(ref).find( ([k, v]) => k.toLowerCase() === keys[i].toLowerCase()) || [null, {}])[1];
    }
    return ref
  }

  function getResult(method, params) {
    let api = dotGrab$1(mock$1, method);

    if (method.match(/^[a-zA-Z]+\.on[A-Za-z]+$/)) {
      api = {
        event: method,
        listening: true
      };
    }

    if (typeof api === 'function') {
      return params == null ? api() : api(params)
    } else return api
  }

  function setMockResponses(m) {
    mock$1 = m;

    pending.forEach(json => handle(json));
    pending.length = 0;
  }

  var mock$2 = {
    send: send,
    receive: receive,
    event: event
  };

  function router (params, callbackOrValue, contextParameterCount) {
      const numArgs = params ? Object.values(params).length : 0;
    
      if (numArgs === contextParameterCount && callbackOrValue === undefined) {
        // getter
        return "getter"
      } else if (numArgs === contextParameterCount && typeof callbackOrValue === 'function') {
        // subscribe
        return "subscriber"
      } else if (numArgs === (contextParameterCount) && callbackOrValue !== undefined) {
        // setter
        return "setter"
      }

      return null
  }

  const mocks = {};

  function mock(module, method, params, value, contextParameterCount, def) {
    const type = router(params, value, contextParameterCount);
    const hash = contextParameterCount ? '.' + Object.keys(params).filter(key => key !== 'value').map(key => params[key]).join('.') : '';
    const key = `${module}.${method}${hash}`;

    if (type === "getter") {
      const value = mocks.hasOwnProperty(key) ? mocks[key] : def;
      return value
    }
    else if (type === "subscriber") ;
    else if (type === "setter") {
      mocks[key] = value;
      mock$2.event(module, `${method}Changed`, { value });
      return null
    }  
  }

  var MockProps = {
    mock: mock
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Accessibility = {
      closedCaptions:  {"enabled":true,"styles":{"fontFamily":"Monospace sans-serif","fontSize":1,"fontColor":"#ffffff","fontEdge":"none","fontEdgeColor":"#7F7F7F","fontOpacity":100,"backgroundColor":"#000000","backgroundOpacity":100,"textAlign":"center","textAlignVertical":"middle","windowColor":"white","windowOpacity":50}},
      closedCaptionsSettings: function (params) {
          return MockProps.mock('Accessibility', 'closedCaptionsSettings', params, undefined, 0, {"enabled":true,"styles":{"fontFamily":"Monospace sans-serif","fontSize":1,"fontColor":"#ffffff","fontEdge":"none","fontEdgeColor":"#7F7F7F","fontOpacity":100,"backgroundColor":"#000000","backgroundOpacity":100,"textAlign":"center","textAlignVertical":"middle","windowColor":"white","windowOpacity":50}})
      },
      voiceGuidance:  {"enabled":true,"speed":2},
      voiceGuidanceSettings: function (params) {
          return MockProps.mock('Accessibility', 'voiceGuidanceSettings', params, undefined, 0, {"enabled":true,"speed":2})
      },
      audioDescriptionSettings: function (params) {
          return MockProps.mock('Accessibility', 'audioDescriptionSettings', params, undefined, 0, {"enabled":true})
      }
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Account = {
      id: function (params) {
          return MockProps.mock('Account', 'id', params, undefined, 0, "123")
      },
      uid: function (params) {
          return MockProps.mock('Account', 'uid', params, undefined, 0, "ee6723b8-7ab3-462c-8d93-dbf61227998e")
      }
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Advertising = {
      config:  {"adServerUrl":"https://demo.v.fwmrm.net/ad/p/1","adServerUrlTemplate":"https://demo.v.fwmrm.net/ad/p/1?flag=+sltp+exvt+slcb+emcr+amcb+aeti&prof=12345:caf_allinone_profile &nw=12345&mode=live&vdur=123&caid=a110523018&asnw=372464&csid=gmott_ios_tablet_watch_live_ESPNU&ssnw=372464&vip=198.205.92.1&resp=vmap1&metr=1031&pvrn=12345&vprn=12345&vcid=1X0Ce7L3xRWlTeNhc7br8Q%3D%3D","adNetworkId":"519178","adProfileId":"12345:caf_allinone_profile","adSiteSectionId":"caf_allinone_profile_section","adOptOut":true,"privacyData":"ew0KICAicGR0IjogImdkcDp2MSIsDQogICJ1c19wcml2YWN5IjogIjEtTi0iLA0KICAibG10IjogIjEiIA0KfQ0K","ifaValue":"01234567-89AB-CDEF-GH01-23456789ABCD","ifa":"ewogICJ2YWx1ZSI6ICIwMTIzNDU2Ny04OUFCLUNERUYtR0gwMS0yMzQ1Njc4OUFCQ0QiLAogICJpZmFfdHlwZSI6ICJzc3BpZCIsCiAgImxtdCI6ICIwIgp9Cg==","appName":"FutureToday","appBundleId":"FutureToday.comcast","distributorAppId":"1001","deviceAdAttributes":"ewogICJib0F0dHJpYnV0ZXNGb3JSZXZTaGFyZUlkIjogIjEyMzQiCn0=","coppa":0,"authenticationEntity":"60f72475281cfba3852413bd53e957f6"},
      policy: function (params) {
          return MockProps.mock('Advertising', 'policy', params, undefined, 0, {"skipRestriction":"adsUnwatched","limitAdTracking":false})
      },
      advertisingId:  {"ifa":"01234567-89AB-CDEF-GH01-23456789ABCD","ifa_type":"idfa","lmt":"0"},
      deviceAttributes:  {},
      appBundleId:  "operator.app"
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Authentication = {
      token:  {"value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c","expires":"2022-04-23T18:25:43.511Z","type":"platform"},
      device:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      session:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      root:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Capabilities = {
      supported:  true,
      available:  true,
      permitted:  true,
      granted:  true,
      info:  [{"capability":"xrn:firebolt:capability:device:model","supported":true,"available":true,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true}},{"capability":"xrn:firebolt:capability:input:keyboard","supported":true,"available":true,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true}},{"capability":"xrn:firebolt:capability:protocol:bluetoothle","supported":false,"available":false,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true},"details":["unsupported"]},{"capability":"xrn:firebolt:capability:token:device","supported":true,"available":true,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true}},{"capability":"xrn:firebolt:capability:token:platform","supported":true,"available":false,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true},"details":["unavailable"]},{"capability":"xrn:firebolt:capability:protocol:moca","supported":true,"available":false,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true},"details":["disabled","unavailable"]},{"capability":"xrn:firebolt:capability:wifi:scan","supported":true,"available":true,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true},"details":["unpermitted"]},{"capability":"xrn:firebolt:capability:localization:postal-code","supported":true,"available":true,"use":{"permitted":true,"granted":null},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true},"details":["ungranted"]},{"capability":"xrn:firebolt:capability:localization:postal-code","supported":true,"available":true,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true},"details":["ungranted"]},{"capability":"xrn:firebolt:capability:localization:locality","supported":true,"available":true,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true},"details":["grantDenied","ungranted"]}],
      request:  [{"capability":"xrn:firebolt:capability:commerce:purchase","supported":true,"available":true,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true}}]
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Device = {
      id: function (params) {
          return MockProps.mock('Device', 'id', params, undefined, 0, "123")
      },
      distributor: function (params) {
          return MockProps.mock('Device', 'distributor', params, undefined, 0, "Company")
      },
      platform: function (params) {
          return MockProps.mock('Device', 'platform', params, undefined, 0, "WPE")
      },
      uid: function (params) {
          return MockProps.mock('Device', 'uid', params, undefined, 0, "ee6723b8-7ab3-462c-8d93-dbf61227998e")
      },
      type: function (params) {
          return MockProps.mock('Device', 'type', params, undefined, 0, "STB")
      },
      model: function (params) {
          return MockProps.mock('Device', 'model', params, undefined, 0, "xi6")
      },
      sku: function (params) {
          return MockProps.mock('Device', 'sku', params, undefined, 0, "AX061AEI")
      },
      make: function (params) {
          return MockProps.mock('Device', 'make', params, undefined, 0, "Arris")
      },
      version: function (params) {
          return MockProps.mock('Device', 'version', params, undefined, 0, {"sdk":{"major":0,"minor":8,"patch":0,"readable":"Firebolt JS SDK v0.8.0"},"api":{"major":0,"minor":8,"patch":0,"readable":"Firebolt API v0.8.0"},"firmware":{"major":1,"minor":2,"patch":3,"readable":"Device Firmware v1.2.3"},"os":{"major":0,"minor":1,"patch":0,"readable":"Firebolt OS v0.1.0"},"debug":"Non-parsable build info for error logging only."})
      },
      hdcp: function (params) {
          return MockProps.mock('Device', 'hdcp', params, undefined, 0, {"hdcp1.4":true,"hdcp2.2":true})
      },
      hdr: function (params) {
          return MockProps.mock('Device', 'hdr', params, undefined, 0, {"hdr10":true,"hdr10Plus":true,"dolbyVision":true,"hlg":true})
      },
      audio: function (params) {
          return MockProps.mock('Device', 'audio', params, undefined, 0, {"stereo":true,"dolbyDigital5.1":true,"dolbyDigital5.1+":true,"dolbyAtmos":true})
      },
      screenResolution: function (params) {
          return MockProps.mock('Device', 'screenResolution', params, undefined, 0, [1920,1080])
      },
      videoResolution: function (params) {
          return MockProps.mock('Device', 'videoResolution', params, undefined, 0, [1920,1080])
      },
      name: function (params) {
          return MockProps.mock('Device', 'name', params, undefined, 0, "Living Room")
      },
      network: function (params) {
          return MockProps.mock('Device', 'network', params, undefined, 0, {"state":"connected","type":"wifi"})
      }
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Discovery = {
      policy: function (params) {
          return MockProps.mock('Discovery', 'policy', params, undefined, 0, {"enableRecommendations":true,"shareWatchHistory":true,"rememberWatchedPrograms":true})
      },
      entityInfo:  true,
      purchasedContent:  true,
      watched:  true,
      watchNext:  true,
      entitlements:  true,
      contentAccess:  null,
      clearContentAccess:  null,
      launch:  true,
      signIn:  true,
      signOut:  true
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Keyboard = {
      email:  "user@domain.com",
      password:  "abc123",
      standard:  "Living Room"
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  let inactive = {"state":"inactive","previous":"initializing"};
  let foreground = {"state":"foreground","previous":"inactive"};
  let unloading = {"state":"unloading","previous":"inactive"};

  const emit$1 = (value) => {
    mock$2.event('Lifecycle', value.state, value);
  };

  const win$2 = typeof window !== 'undefined' ? window : {};
  const automation = win$2.__firebolt ? !!win$2.__firebolt.automation : false;

  var _Lifecycle = {
    ready: function() {
      inactive.previous = 'initializing';
      setTimeout(() => emit$1(inactive), automation ? 1 : 500);
      foreground.previous = 'inactive';
      setTimeout(() => emit$1(foreground), automation ? 2 : 1000);
    },

    close: function(params) {
      let reason = params.reason;
      if (reason === 'remoteButton') {
        inactive.previous = 'foreground';
        setTimeout(() => emit$1(inactive), automation ? 1 : 500);
      }
      else if (['userExit', 'error'].includes(reason)) {
        inactive.previous = 'foreground';
        unloading.previous = 'inactive';
        setTimeout(() => emit$1(inactive), automation ? 1 : 500);
        setTimeout(() => emit$1(unloading), automation ? 2 : 1000);
      }
      else {
        throw "Invalid close reason"
      }
    },

    finished: function() {
      if (win$2.location)
        win$2.location.href = "about:blank";
    },
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Localization = {
      locality: function (params) {
          return MockProps.mock('Localization', 'locality', params, undefined, 0, "Philadelphia")
      },
      postalCode: function (params) {
          return MockProps.mock('Localization', 'postalCode', params, undefined, 0, "19103")
      },
      countryCode: function (params) {
          return MockProps.mock('Localization', 'countryCode', params, undefined, 0, "US")
      },
      language: function (params) {
          return MockProps.mock('Localization', 'language', params, undefined, 0, "en")
      },
      preferredAudioLanguages: function (params) {
          return MockProps.mock('Localization', 'preferredAudioLanguages', params, undefined, 0, ["es","en"])
      },
      locale: function (params) {
          return MockProps.mock('Localization', 'locale', params, undefined, 0, "en-US")
      },
      latlon:  [39.9549,75.1699],
      additionalInfo:  {}
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Metrics = {
      ready:  true,
      signIn:  true,
      signOut:  true,
      startContent:  true,
      stopContent:  true,
      page:  true,
      action:  true,
      error:  true,
      mediaLoadStart:  true,
      mediaPlay:  true,
      mediaPlaying:  true,
      mediaPause:  true,
      mediaWaiting:  true,
      mediaProgress:  true,
      mediaSeeking:  true,
      mediaSeeked:  true,
      mediaRateChange:  true,
      mediaRenditionChange:  true,
      mediaEnded:  true
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Parameters = {
      initialization:  {"lmt":0,"us_privacy":"1-Y-","discovery":{"navigateTo":{"action":"entity","data":{"entityId":"abc","entityType":"program","programType":"movie"},"context":{"source":"voice"}}}}
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Profile = {
      approveContentRating:  false,
      approvePurchase:  false,
      flags:  {"userExperience":"1000"}
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _SecondScreen = {
      protocols:  {"dial1.7":true},
      device:  "device-id",
      friendlyName: function (params) {
          return MockProps.mock('SecondScreen', 'friendlyName', params, undefined, 0, "Living Room")
      }
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _SecureStorage = {
      get:  "VGhpcyBub3QgYSByZWFsIHRva2VuLgo=",
      set:  null,
      remove:  null,
      clear:  null
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Platform = {
    localization: _Localization,
    device: _Device,
    accessibility: _Accessibility,
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  class Queue {
    constructor () {
      this._callback = null;
      this._queue = [];
    }

    send (json) {
      this._queue.push(json);
    }

    receive (_callback) {
      this._callback = _callback;
    }

    flush (transport) {
      transport.receive(this._callback);
      this._queue.forEach(item => transport.send(item));
    }
  }

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  const settings = {};
  const subscribers = {};

  const initSettings = (appSettings, platformSettings) => {
    settings['app'] = appSettings;
    settings['platform'] = {
      logLevel: 'WARN',
      ...platformSettings
    };
    settings['user'] = {};
  };

  const publish = (key, value) => {
    subscribers[key] && subscribers[key].forEach(subscriber => subscriber(value));
  };

  const dotGrab = (obj = {}, key) => {
    const keys = key.split('.');
    for (let i = 0; i < keys.length; i++) {
      obj = obj[keys[i]] = obj[keys[i]] !== undefined ? obj[keys[i]] : {};
    }
    return typeof obj === 'object' ? (Object.keys(obj).length ? obj : undefined) : obj
  };

  var Settings = {
    get(type, key, fallback = undefined) {
      const val = dotGrab(settings[type], key);
      return val !== undefined ? val : fallback
    },
    has(type, key) {
      return !!this.get(type, key)
    },
    set(key, value) {
      settings['user'][key] = value;
      publish(key, value);
    },
    subscribe(key, callback) {
      subscribers[key] = subscribers[key] || [];
      subscribers[key].push(callback);
    },
    unsubscribe(key, callback) {
      if (callback) {
        const index = subscribers[key] && subscribers[key].findIndex(cb => cb === callback);
        index > -1 && subscribers[key].splice(index, 1);
      } else {
        if (key in subscribers) {
          subscribers[key] = [];
        }
      }
    },
    clearSubscribers() {
      for (const key of Object.getOwnPropertyNames(subscribers)) {
        delete subscribers[key];
      }
    },
    setLogLevel (logLevel) {
      settings.platform.logLevel = logLevel;
    },
    getLogLevel () {
      return settings.platform.logLevel
    }
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  const win$1 = typeof window !== 'undefined' ? window : {};

  class LegacyTransport {
    constructor (bridge) {
      this.bridge = bridge;
    }

    send (msg) {
      this.bridge.JSMessageChanged(msg, () => {});
    }

    receive (callback) {
      win$1.$badger = win$1.$badger || {};
      /** Hold on to real $badger callback and event methods so they can be called for non-jsonrpc messages */
      const badgerCallback = win$1.$badger.callback ? win$1.$badger.callback.bind(win$1.$badger) : null;
      const badgerEvent = win$1.$badger.event ? win$1.$badger.event.bind(win$1.$badger) : null;
      win$1.$badger.callback = (pid, success, json) => {
        if (json.jsonrpc) {
          callback(JSON.stringify(json));
        } else if (badgerCallback) {
          badgerCallback(pid, success, json);
        }
      };
      win$1.$badger.event = (handlerId, json) => {
        if (json.jsonrpc) {
          callback(JSON.stringify(json));
        } else if (badgerEvent) {
          badgerEvent(handlerId, json);
        }
      };
    }

    static isLegacy (transport) {
      return LegacyTransport.isXREProxy(transport) || ((transport.send === undefined) && (transport.JSMessageChanged))
    }

    static isXREProxy (transport) {
      /** Set top boxes running XRE has a "Proxy" transport
       * native object that intercepts ALL method calls, so we
       * cannot test for transport.send existence because it will return true
       * even though it actually is not supported. Check if some obscure method
       * name like "proxyObjectTest" is defined. If it is then we know we are using a
       * Proxy object and thus is legacy transport.
       */
      return transport.proxyObjectTest !== undefined
    }
  }

  const MAX_QUEUED_MESSAGES = 100;

  class WebsocketTransport {
    constructor (endpoint) {
      this._endpoint = endpoint;
      this._ws = null;
      this._connected = false;
      this._queue = [];
      this._callbacks = [];
    }

    send (msg) {
      this._connect();

      if (this._connected) {
        this._ws.send(msg);
      } else {
        if (this._queue.length < MAX_QUEUED_MESSAGES) {
          this._queue.push(msg);
        }
      }
    }

    receive (callback) {
      if (!callback) return
      this._connect();
      this._callbacks.push(callback);
    }

    _notifyCallbacks (message) {
      for (let i = 0; i < this._callbacks.length; i++) {
        setTimeout(() => this._callbacks[i](message), 1);
      }
    }

    _connect () {
      if (this._ws) return
      this._ws = new WebSocket(this._endpoint, ['jsonrpc']);
      this._ws.addEventListener('message', message => {
        this._notifyCallbacks(message.data);
      });
      this._ws.addEventListener('error', message => {
      });
      this._ws.addEventListener('close', message => {
        this._ws = null;
        this._connected = false;
      });
      this._ws.addEventListener('open', message => {
        this._connected = true;
        for (let i = 0; i < this._queue.length; i++) {
          this._ws.send(this._queue[i]);
        }
        this._queue = [];
      });
    }
  }

  /*
  methods = Map<string, {
      x-this-param: 'accessory',
      x-additional-params: ['timeout'],
      x-method: 'Accessory.pair'
  }>
  */

  function transform(result, transforms) {

      if (!transforms || !transforms.methods) {
          return result
      }

      const { methods } = transforms;
      const transformed = JSON.parse(JSON.stringify(result));

      Object.keys(methods).forEach(key => {
          const method_info = methods[key];
          const rpc_method = method_info['x-method'];
          const [module, method] = rpc_method.split('.');
          const params = {};
          params[method_info['x-this-param']] = transformed;
          transformed[key] = (...args) => {
              // copy the args into the correct RPC param names
              for (var i=0; i<args.length; i++) {
                  params[method_info['x-additional-params'][i]] = args[i];
              }
              return Transport.send(module.toLowerCase(), method, params)
          };
      });
      return transformed
  }

  var Results = {
      transform
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  const LEGACY_TRANSPORT_SERVICE_NAME = 'com.comcast.BridgeObject_1';
  let moduleInstance = null;

  const isEventSuccess = x => x && (typeof x.event === 'string') && (typeof x.listening === 'boolean');

  const win = typeof window !== 'undefined' ? window : {};

  class Transport {
    constructor () {
      this._promises = [];
      this._transport = null;
      this._id = 1;
      this._eventEmitters = [];
      this._eventIds = [];
      this._queue = new Queue();
      this._deprecated = {};
      this.isMock = false;
    }

    static addEventEmitter (emitter) {
      Transport.get()._eventEmitters.push(emitter);
    }

    static registerDeprecatedMethod (module, method, alternative) {
      Transport.get()._deprecated[module.toLowerCase() + '.' + method.toLowerCase()] = {
        alternative: alternative || ''
      };
    }

    _endpoint () {
      if (win.__firebolt && win.__firebolt.endpoint) {
        return win.__firebolt.endpoint
      }
      return null
    }

    constructTransportLayer () {
      let transport;
      const endpoint = this._endpoint();
      if (endpoint && (endpoint.startsWith('ws://') || endpoint.startsWith('wss://'))) {
        transport = new WebsocketTransport(endpoint);
        transport.receive(this.receiveHandler.bind(this));
      } else if (
        typeof win.ServiceManager !== 'undefined' &&
        win.ServiceManager &&
        win.ServiceManager.version
      ) {
        // Wire up the queue
        transport = this._queue;
        // get the default bridge service, and flush the queue
        win.ServiceManager.getServiceForJavaScript(LEGACY_TRANSPORT_SERVICE_NAME, service => {
          if (LegacyTransport.isLegacy(service)) {
            transport = new LegacyTransport(service);
          } else {
            transport = service;
          }
          this.setTransportLayer(transport);
        });
      } else {
        this.isMock = true;
        transport = mock$2;
        transport.receive(this.receiveHandler.bind(this));
      }
      return transport
    }

    setTransportLayer (tl) {
      this._transport = tl;
      this._queue.flush(tl);
    }

    static send (module, method, params, transforms) {
      /** Transport singleton across all SDKs to keep single id map */
      return Transport.get()._send(module, method, params, transforms)
    }

    static listen(module, method, params, transforms) {
      return Transport.get()._sendAndGetId(module, method, params, transforms)
    }

    _send (module, method, params, transforms) {
      if (Array.isArray(module) && !method && !params) {
        return this._batch(module)
      }
      else {
        return this._sendAndGetId(module, method, params, transforms).promise
      }
    }

    _sendAndGetId (module, method, params, transforms) {
      const {promise, json, id } = this._processRequest(module, method, params, transforms);
      const msg = JSON.stringify(json);
      if (Settings.getLogLevel() === 'DEBUG') {
        console.debug('Sending message to transport: ' + msg);
      }
      this._transport.send(msg);

      return { id, promise }
    }

    _batch (requests) {
      const results = [];
      const json = [];

      requests.forEach( ({module, method, params, transforms}) => {
        const result = this._processRequest(module, method, params, transforms);
        results.push({
          promise: result.promise,
          id: result.id
        });
        json.push(result.json);
      });

      const msg = JSON.stringify(json);
      if (Settings.getLogLevel() === 'DEBUG') {
        console.debug('Sending message to transport: ' + msg);
      }
      this._transport.send(msg);

      return results
    }

    _processRequest (module, method, params, transforms) {

      const p = this._addPromiseToQueue(module, method, params, transforms);
      const json = this._createRequestJSON(module, method, params);

      const result = {
        promise: p,
        json: json,
        id: this._id
      };

      this._id++;

      return result
    }

    _createRequestJSON (module, method, params) {
      return { jsonrpc: '2.0', method: module.toLowerCase() + '.' + method, params: params, id: this._id }
    }

    _addPromiseToQueue (module, method, params, transforms) {
      return new Promise((resolve, reject) => {
        this._promises[this._id] = {};
        this._promises[this._id].promise = this;
        this._promises[this._id].resolve = resolve;
        this._promises[this._id].reject = reject;
        this._promises[this._id].transforms = transforms;

        const deprecated = this._deprecated[module.toLowerCase() + '.' + method.toLowerCase()];
        if (deprecated) {
          console.warn(`WARNING: ${module}.${method}() is deprecated. ` + deprecated.alternative);
        }

        // store the ID of the first listen for each event
        // TODO: what about wild cards?
        if (method.match(/^on[A-Z]/)) {
          if (params.listen) {
            this._eventIds.push(this._id);
          } else {
            this._eventIds = this._eventIds.filter(id => id !== this._id);
          }
        }
      })
    }

    /**
     * If we have a global transport, use that. Otherwise, use the module-scoped transport instance.
     * @returns {Transport}
     */
    static get () {
      /** Set up singleton and initialize it */
      win.__firebolt = win.__firebolt || {};
      if ((win.__firebolt.transport == null) && (moduleInstance == null)) {
        const transport = new Transport();
        transport.init();
        if (transport.isMock) {
          /** We should use the mock transport built with the SDK, not a global */
          moduleInstance = transport;
        } else {
          win.__firebolt = win.__firebolt || {};
          win.__firebolt.transport = transport;
        }
        win.__firebolt.setTransportLayer = transport.setTransportLayer.bind(transport);
      }
      return win.__firebolt.transport ? win.__firebolt.transport : moduleInstance
    }

    receiveHandler (message) {
      if (Settings.getLogLevel() === 'DEBUG') {
        console.debug('Received message from transport: ' + message);
      }
      const json = JSON.parse(message);
      const p = this._promises[json.id];

      if (p) {
        if (json.error) p.reject(json.error);
        else {
          // Do any module-specific transforms on the result
          let result = json.result;

          if (p.transforms) {
            if (Array.isArray(json.result)) {
              result = result.map(x => Results.transform(x, p.transforms));
            }
            else {
              result = Results.transform(result, p.transforms);
            }
          }
          
          p.resolve(result);
        }
        delete this._promises[json.id];
      }

      // event responses need to be emitted, even after the listen call is resolved
      if (this._eventIds.includes(json.id) && !isEventSuccess(json.result)) {
        this._eventEmitters.forEach(emit => {
          emit(json.id, json.result);
        });
      }
    }

    init () {
      initSettings({}, { log: true });
      this._queue.receive(this.receiveHandler.bind(this));
      if (win.__firebolt) {
        if (win.__firebolt.mockTransportLayer === true) {
          this.isMock = true;
          this.setTransportLayer(mock$2);
        } else if (win.__firebolt.getTransportLayer) {
          this.setTransportLayer(win.__firebolt.getTransportLayer());
        }
      }
      if (this._transport == null) {
        this._transport = this.constructTransportLayer();
      }
    }
  }
  win.__firebolt = win.__firebolt || {};
  win.__firebolt.setTransportLayer = transport => {
    Transport.get().setTransportLayer(transport);
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  let listenerId = 0;

  // holds two maps of ${module}.${event} => listenerId, e.g. callback method id
  // note that one callback can listen to multiple events, e.g. 'discovery.*'
  // internal is only available via a private export that we use to ensure our modules know about
  // events before the apps using the SDK (otherwise state errors can happen)
  const listeners = {
    internal: {},
    external: {},

    // Several convenience functions below for checking both internal & external lists w/ one operation

    // gets a merge list of ids for a single event key
    get: (key) => {
      return Object.assign(Object.assign({}, listeners.internal[key]), listeners.external[key])
    },
    // adds a callback/id to a key on the external list only 
    set: (key, id, value) => {
      listeners.external[key] = listeners.external[key] || {};
      listeners.external[key][id] = value;
    },
    // adds a callback/id to a key on the internal list only 
    setInternal: (key, id, value) => {
      listeners.internal[key] = listeners.internal[key] || {};
      listeners.internal[key][id] = value;
    },
    // finds the key for an id in either list (it can only be in one)
    find: (id) => {
      let key;
      [listeners.internal, listeners.external].find(group => {
        key = Object.keys(group).find(key => group[key][id]);
        if (key) return true
      });
      return key
    },
    // removes an id from either list
    remove: (id) => {
      [listeners.internal, listeners.external].forEach(group => {
        Object.keys(group).forEach(key => {
          if (group[key] && group[key][id]) {
            delete group[key][id];
            if (Object.values(group[key]).length === 0) {
              delete group[key];
            }
          }
        });
      });
    },
    // removes a key from both lists if _internal is true, otherwise only the external list
    removeKey: (key, _internal=false) => {
      _internal && listeners.internal[key] && delete listeners.internal[key];
      listeners.external[key] && delete listeners.external[key];
    },
    // gives a list of all keys
    keys: () => {
      return Array.from(new Set(Object.keys(listeners.internal).concat(Object.keys(listeners.external))))
    },
    // counts how many listeners are in a key across both lists
    count: (key) => {
      return Object.values(listeners.get(key)).length
    }
  };

  // holds a map of RPC Ids => Context Key, e.g. the RPC id of an onEvent call mapped to the corresponding context parameters key for that RPC call
  const keys = {};

  // holds a map of ${module}.${event} => Transport.send calls (only called once per event)
  // note that the keys here MUST NOT contain wild cards
  const oncers = [];
  const validEvents = {};
  const validContext = {};

  let transportInitialized = false;

  const emit = (id, value) => {
    callCallbacks(listeners.internal[keys[id]], [value]);
    callCallbacks(listeners.external[keys[id]], [value]);
  };

  const registerEvents = (module, events) => {
    validEvents[module.toLowerCase()] = events.concat();
  };

  const registerEventContext = (module, event, context) => {
    validContext[module.toLowerCase()] = validContext[module.toLowerCase()] || {};
    validContext[module.toLowerCase()][event] = context.concat();
  };

  const callCallbacks = (cbs, args) => {
    cbs &&
      Object.keys(cbs).forEach(listenerId => {
        let callback = cbs[listenerId];
        if (oncers.indexOf(parseInt(listenerId)) >= 0) {
          oncers.splice(oncers.indexOf(parseInt(listenerId)), 1);
          delete cbs[listenerId];
        }
        callback.apply(null, args);
      });
  };

  const doListen = function(module, event, callback, context, once, internal=false) {
    init();

    if (typeof callback !== 'function') {
      return Promise.reject('No valid callback function provided.')
    } else {
      if (module === '*') {
        return Promise.reject('No valid module name provided')
      }

      const wildcard = event === '*';
      const events = (wildcard ? validEvents[module] : [event]); // explodes wildcards into an array
      const promises = [];
      const hasContext = Object.values(context).length > 0;
      const contextKey = Object.keys(context).sort().map(key => key + '=' + JSON.stringify(context[key])).join('&');

      listenerId++;

      if (once) {
        oncers.push(listenerId);
      }

      events.forEach(event => {
        const key = module + '.' + event + (hasContext ? `.${contextKey}`  : '');

        if (Object.values(listeners.get(key)).length === 0) {
          const args = Object.assign({ listen: true }, context);
          const { id, promise } = Transport.listen(module, 'on' + event[0].toUpperCase() + event.substring(1), args);
          keys[id] = key;
          promises.push(promise);
        }

        const setter = internal ? listeners.setInternal : listeners.set;

        if (wildcard) {
          setter(key, ''+listenerId, value => callback(event, value));
        }
        else {
          setter(key, ''+listenerId, callback);
        }
      });

      let resolve, reject;
      let p = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });

      if (promises.length) {
        Promise.all(promises).then(responses => {
          resolve(listenerId);
        }).catch(error => {
          // Promise.all rejects if at least one promise rejects... we don't want that behavior here
          // TODO: Do something better than fail silently
          if (event === '*') {
            resolve(listenerId);
          }
          else {
            reject(error);
          }
        });
      }
      else {
        resolve(listenerId);
      }

      return p
    }
  };

  const getListenArgs = function(...args) {
    const callback = args.pop();
    const [module, event, context] = getClearArgs(...args);

    return [module, event, callback, context]
  };

  const getClearArgs = function(...args) {
    const module = (args.shift() || '*').toLowerCase();
    const event = args.shift() || '*';
    const context = {};
    
    for (let i = 0; args.length; i++) {
      context[validContext[module][event][i]] = args.shift();
    }

    return [module, event, context]
  };

  const once$2 = function(...args) {
    const [module, event, callback, context] = getListenArgs(...args);
    return doListen(module, event, callback, context, true)
  };

  const listen$2 = function(...args) {
    const [module, event, callback, context] = getListenArgs(...args);
    return doListen(module, event, callback, context, false)
  };

  const clear$2 = function(...args) {
    if (args && args.length && typeof args[0] === 'number') {
      return doClear(args[0])
    }
    else if (args && args.length && typeof args[1] === 'number') {
      return doClear(args[1])
    }
    else {
      const [moduleOrId, event, context] = getClearArgs(...args);
      return doClear(moduleOrId, event, context)
    }
  };

  const unsubscribe = (key, context) => {
    const [module, event] = key.split('.').slice(0, 2);
    const args = Object.assign({ listen: false }, context);
    Transport.send(module, 'on' + event[0].toUpperCase() + event.substr(1), args);
  };


  // TODO: clear needs to go through Transport Layer
  const doClear = function (moduleOrId = false, event = false, context) {
    if (event === '*') {
      event = false;
    }

    if (typeof moduleOrId === 'number') {
      const searchId = moduleOrId.toString();
      const key = listeners.find(searchId);

      if (key) {
        listeners.remove(searchId);
        if (listeners.count(key) === 0) {
          unsubscribe(key);
        }
        return true
      }
      return false
    } else {
      if (!moduleOrId && !event) {
        listeners.keys().forEach(key => {
          listeners.removeKey(key);
          unsubscribe(key);
        });
      } else if (!event) {
        listeners.keys().forEach(key => {
          if (key.indexOf(moduleOrId.toLowerCase()) === 0) {
            listeners.removeKey(key);
            unsubscribe(key);
          }
        });
      } else {
        const hasContext = Object.values(context).length > 0;
        const contextKey = Object.keys(context).sort().map(key => key + '=' + JSON.stringify(context[key])).join('&');
        const key = moduleOrId + '.' + event + (hasContext ? `.${contextKey}`  : '');

        listeners.removeKey(key);
        unsubscribe(key, context);
      }
    }
  };

  const init = () => {
    if (!transportInitialized) {
      Transport.addEventEmitter(emit);
      setMockListener(listen$2);
      transportInitialized = true;
    }
  };

  var Events = {
    listen: listen$2,
    once: once$2,
    clear: clear$2,
    broadcast(event, value) {
      emit(Object.entries(keys).find( ([k, v]) => v === 'app.'+event)[0], value);
    },
  };

  function prop(moduleName, key, params, callbackOrValue = undefined, immutable, readonly, contextParameterCount) {
    const numArgs = Object.values(params).length;
    const type = router(params, callbackOrValue, contextParameterCount);

    if (type === "getter") {
      return Transport.send(moduleName, key, params)
    }
    else if (type === "subscriber") {
      // subscriber
      if (immutable) {
        throw new Error('Cannot subscribe to an immutable property')
      }
      return Events.listen(moduleName, key + 'Changed', ...Object.values(params), callbackOrValue)
    }
    else if (type === "setter") {
      // setter
      if (immutable) {
        throw new Error('Cannot set a value to an immutable property')
      }
      if (readonly) {
        throw new Error('Cannot set a value to a readonly property')
      }
      return Transport.send(moduleName, 'set' + key[0].toUpperCase() + key.substring(1), Object.assign({
        value: callbackOrValue
      }, params))
    }
    else if (numArgs < contextParameterCount) {
      throw new Error('Cannot get a value without all required context parameters.')
    }
    else {
      throw new Error('Property accessed with unexpected number of parameters.')
    }
  }

  var Prop = {
    prop: prop
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  registerEvents('Accessibility', ["audioDescriptionSettingsChanged","closedCaptionsSettingsChanged","voiceGuidanceSettingsChanged"]);


  Transport.registerDeprecatedMethod('Accessibility', 'closedCaptions', 'Use Accessibility.closedCaptionsSettings() instead.');
  Transport.registerDeprecatedMethod('Accessibility', 'voiceGuidance', 'Use Accessibility.voiceGuidanceSettings() instead.');

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  registerEvents('Advertising', ["policyChanged"]);

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */



  Transport.registerDeprecatedMethod('Authentication', 'token', 'Use Authentication module has individual methods for each token type. instead.');

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  registerEvents('Capabilities', ["available","granted","revoked","unavailable"]);



  // onAvailable is accessed via listen('available, ...)

  registerEventContext('Capabilities', 'available', ["capability"]);
  // onGranted is accessed via listen('granted, ...)

  registerEventContext('Capabilities', 'granted', ["role","capability"]);
  // onRevoked is accessed via listen('revoked, ...)

  registerEventContext('Capabilities', 'revoked', ["role","capability"]);
  // onUnavailable is accessed via listen('unavailable, ...)

  registerEventContext('Capabilities', 'unavailable', ["capability"]);

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  registerEvents('Device', ["audioChanged","deviceNameChanged","hdcpChanged","hdrChanged","nameChanged","networkChanged","screenResolutionChanged","videoResolutionChanged"]);


  Transport.registerDeprecatedMethod('Device', 'onDeviceNameChanged', 'Use Device.name() instead.');

  function version() {
    return new Promise( (resolve, reject) => {
        Transport.send('device', 'version').then( v => {
            v = v || {};
            v.sdk = v.sdk || {};
            v.sdk.major = parseInt('0');
            v.sdk.minor = parseInt('16');
            v.sdk.patch = parseInt('0');
            v.sdk.readable = 'Firebolt Core SDK 0.16.0';
            resolve(v);    
        }).catch(error => {
            reject(error);
        });
    })
  }


      // Methods
  function audio() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'audio', {  }, callbackOrValue, false, true, 0)
  }
    function clear$1(...args) {
      return Events.clear('Device', ...args)
    }

  function distributor() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'distributor', {  }, callbackOrValue, true, true, 0)
  }
  function hdcp() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'hdcp', {  }, callbackOrValue, false, true, 0)
  }
  function hdr() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'hdr', {  }, callbackOrValue, false, true, 0)
  }
  function id() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'id', {  }, callbackOrValue, true, true, 0)
  }
    function listen$1(...args) {
      return Events.listen('Device', ...args)
    } 
    
  function make() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'make', {  }, callbackOrValue, true, true, 0)
  }
  function model() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'model', {  }, callbackOrValue, true, true, 0)
  }
  function name() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'name', {  }, callbackOrValue, false, true, 0)
  }
  function network() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'network', {  }, callbackOrValue, false, true, 0)
  }
    function once$1(...args) {
      return Events.once('Device', ...args)
    }

  function platform() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'platform', {  }, callbackOrValue, true, true, 0)
  }
  function screenResolution() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'screenResolution', {  }, callbackOrValue, false, true, 0)
  }
  function sku() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'sku', {  }, callbackOrValue, true, true, 0)
  }
  function type() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'type', {  }, callbackOrValue, true, true, 0)
  }
  function uid() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'uid', {  }, callbackOrValue, true, true, 0)
  }
  function videoResolution() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'videoResolution', {  }, callbackOrValue, false, true, 0)
  }

  var Device = {

  events: {
      DEVICE_NAME_CHANGED: 'deviceNameChanged',
      NAME_CHANGED: 'nameChanged',
      HDCP_CHANGED: 'hdcpChanged',
      HDR_CHANGED: 'hdrChanged',
      AUDIO_CHANGED: 'audioChanged',
      SCREEN_RESOLUTION_CHANGED: 'screenResolutionChanged',
      VIDEO_RESOLUTION_CHANGED: 'videoResolutionChanged',
      NETWORK_CHANGED: 'networkChanged',
  },

  NetworkState: {
      CONNECTED: 'connected',
      DISCONNECTED: 'disconnected',
  },

  NetworkType: {
      WIFI: 'wifi',
      ETHERNET: 'ethernet',
      HYBRID: 'hybrid',
  },

  AudioProfile: {
      STEREO: 'stereo',
      DOLBY_DIGITAL_5_1: 'dolbyDigital5.1',
      DOLBY_DIGITAL_7_1: 'dolbyDigital7.1',
      DOLBY_DIGITAL_5_1_PLUS: 'dolbyDigital5.1+',
      DOLBY_DIGITAL_7_1_PLUS: 'dolbyDigital7.1+',
      DOLBY_ATMOS: 'dolbyAtmos',
  },


    version,
  audio,
clear:   clear$1,
  distributor,
  hdcp,
  hdr,
  id,
listen:   listen$1,
  make,
  model,
  name,
  network,
once:   once$1,
  platform,
  screenResolution,
  sku,
  type,
  uid,
  videoResolution
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */



      // Methods

  function action(category, type, parameters) {

    const transforms = null;

    return Transport.send('Metrics', 'action', { category, type, parameters }, transforms)
  }

  function error(type, code, description, visible, parameters) {

    const transforms = null;

    return Transport.send('Metrics', 'error', { type, code, description, visible, parameters }, transforms)
  }

  function mediaEnded(entityId) {

    const transforms = null;

    return Transport.send('Metrics', 'mediaEnded', { entityId }, transforms)
  }

  function mediaLoadStart(entityId) {

    const transforms = null;

    return Transport.send('Metrics', 'mediaLoadStart', { entityId }, transforms)
  }

  function mediaPause(entityId) {

    const transforms = null;

    return Transport.send('Metrics', 'mediaPause', { entityId }, transforms)
  }

  function mediaPlay(entityId) {

    const transforms = null;

    return Transport.send('Metrics', 'mediaPlay', { entityId }, transforms)
  }

  function mediaPlaying(entityId) {

    const transforms = null;

    return Transport.send('Metrics', 'mediaPlaying', { entityId }, transforms)
  }

  function mediaProgress(entityId, progress) {

    const transforms = null;

    return Transport.send('Metrics', 'mediaProgress', { entityId, progress }, transforms)
  }

  function mediaRateChange(entityId, rate) {

    const transforms = null;

    return Transport.send('Metrics', 'mediaRateChange', { entityId, rate }, transforms)
  }

  function mediaRenditionChange(entityId, bitrate, width, height, profile) {

    const transforms = null;

    return Transport.send('Metrics', 'mediaRenditionChange', { entityId, bitrate, width, height, profile }, transforms)
  }

  function mediaSeeked(entityId, position) {

    const transforms = null;

    return Transport.send('Metrics', 'mediaSeeked', { entityId, position }, transforms)
  }

  function mediaSeeking(entityId, target) {

    const transforms = null;

    return Transport.send('Metrics', 'mediaSeeking', { entityId, target }, transforms)
  }

  function mediaWaiting(entityId) {

    const transforms = null;

    return Transport.send('Metrics', 'mediaWaiting', { entityId }, transforms)
  }

  function page(pageId) {

    const transforms = null;

    return Transport.send('Metrics', 'page', { pageId }, transforms)
  }




  function startContent(entityId) {

    const transforms = null;

    return Transport.send('Metrics', 'startContent', { entityId }, transforms)
  }

  function stopContent(entityId) {

    const transforms = null;

    return Transport.send('Metrics', 'stopContent', { entityId }, transforms)
  }

  var Metrics = {

  ErrorType: {
      NETWORK: 'network',
      MEDIA: 'media',
      RESTRICTION: 'restriction',
      ENTITLEMENT: 'entitlement',
      OTHER: 'other',
  },

  action,
  error,
  mediaEnded,
  mediaLoadStart,
  mediaPause,
  mediaPlay,
  mediaPlaying,
  mediaProgress,
  mediaRateChange,
  mediaRenditionChange,
  mediaSeeked,
  mediaSeeking,
  mediaWaiting,
  page,
  startContent,
  stopContent
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  registerEvents('Discovery', ["navigateTo","policyChanged","pullEntityInfo","pullPurchasedContent"]);


  Transport.registerDeprecatedMethod('Discovery', 'entitlements', 'Use Discovery.contentAccess() instead.');

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  registerEvents('Lifecycle', ["background","foreground","inactive","suspended","unloading"]);

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  registerEvents('Localization', ["countryCodeChanged","languageChanged","localeChanged","localityChanged","postalCodeChanged","preferredAudioLanguagesChanged"]);



  // onCountryCodeChanged is accessed via listen('countryCodeChanged, ...)

  // onLanguageChanged is accessed via listen('languageChanged, ...)

  // onLocaleChanged is accessed via listen('localeChanged, ...)

  // onLocalityChanged is accessed via listen('localityChanged, ...)

  // onPostalCodeChanged is accessed via listen('postalCodeChanged, ...)

  // onPreferredAudioLanguagesChanged is accessed via listen('preferredAudioLanguagesChanged, ...)


      // Methods

  function additionalInfo() {

    const transforms = null;

    return Transport.send('Localization', 'additionalInfo', {  }, transforms)
  }
    function clear(...args) {
      return Events.clear('Localization', ...args)
    }

  function countryCode() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Localization',  'countryCode', {  }, callbackOrValue, false, true, 0)
  }
  function language() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Localization',  'language', {  }, callbackOrValue, false, true, 0)
  }

  function latlon() {

    const transforms = null;

    return Transport.send('Localization', 'latlon', {  }, transforms)
  }
    function listen(...args) {
      return Events.listen('Localization', ...args)
    } 
    
  function locale() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Localization',  'locale', {  }, callbackOrValue, false, true, 0)
  }
  function locality() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Localization',  'locality', {  }, callbackOrValue, false, true, 0)
  }
    function once(...args) {
      return Events.once('Localization', ...args)
    }

  function postalCode() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Localization',  'postalCode', {  }, callbackOrValue, false, true, 0)
  }
  function preferredAudioLanguages() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Localization',  'preferredAudioLanguages', {  }, callbackOrValue, false, true, 0)
  }
    
  var Localization = {

  events: {
      LOCALITY_CHANGED: 'localityChanged',
      POSTAL_CODE_CHANGED: 'postalCodeChanged',
      COUNTRY_CODE_CHANGED: 'countryCodeChanged',
      LANGUAGE_CHANGED: 'languageChanged',
      PREFERRED_AUDIO_LANGUAGES_CHANGED: 'preferredAudioLanguagesChanged',
      LOCALE_CHANGED: 'localeChanged',
  },

  additionalInfo,
  clear,
  countryCode,
  language,
  latlon,
  listen,
  locale,
  locality,
  once,
  postalCode,
  preferredAudioLanguages
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  registerEvents('SecondScreen', ["closeRequest","friendlyNameChanged","launchRequest"]);

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  setMockResponses({
      Accessibility: _Accessibility,
      Account: _Account,
      Advertising: _Advertising,
      Authentication: _Authentication,
      Capabilities: _Capabilities,
      Device: _Device,
      Discovery: _Discovery,
      Keyboard: _Keyboard,
      Lifecycle: _Lifecycle,
      Localization: _Localization,
      Metrics: _Metrics,
      Parameters: _Parameters,
      Profile: _Profile,
      SecondScreen: _SecondScreen,
      SecureStorage: _SecureStorage,
      Platform: _Platform,
  });

  class VideoCard extends Lightning$1.Component {
    static _template() {
      return {
        w: 300,
        h: 450,
        Image: {
          w: w => w,
          h: h => h - 50
        }
      };
    }
    set item(obj) {
      const {
        label,
        src,
        videoUrl
      } = obj;
      this._videoUrl = videoUrl; // Store the video URL

      this.patch({
        Image: {
          src
        }
      });
    }

    //   _handleEnter() {
    //     if (this._videoUrl) {
    //       // Trigger video playback here using this._videoUrl
    //       // For example, you can use a video player library or navigate to a new state for video playback.
    //       // Replace the following line with your video playback logic.
    //       console.log("Play video with URL:", this._videoUrl);
    //     }
    //   }

    _handleEnter() {
      if (this._videoUrl) {
        console.log("Play video with URL:", this._videoUrl);
        // Create and initialize the video player
        if (!this._player) {
          this._player = new AAMPMediaPlayer();
          this._player.on("loadedmetadata", () => {
            // Video metadata is loaded; you can show the video now
            this._showVideo();
          });
          this._player.on("ended", () => {
            // Video playback ended; you can handle this event as needed
            // For example, return to the previous state
            this._hideVideo();
          });
        }

        // Load and play the video
        this._player.load(this._videoUrl);
        this._player.play();

        // Show the video
        this._showVideo();
      }
    }
    _showVideo() {
      // Show the video player or any other UI related to video playback
      // For example, change the visibility of a video container
      // this.tag("VideoContainer").visible = true;
    }
    _hideVideo() {
      // Hide the video player or any other UI related to video playback
      // For example, change the visibility of a video container
      // this.tag("VideoContainer").visible = false;
    }
    _stopVideo() {
      // Stop the video playback and clean up resources
      if (this._player) {
        this._player.stop();
        this._player.destroy();
        this._player = null;
      }
    }
    _focus() {
      this.patch({
        smooth: {
          color: 0xff005500,
          scale: 1.1
        },
        shader: {
          type: Lightning$1.shaders.Outline,
          stroke: 1.1,
          color: 0xff09f676
        }
      });
    }
    _unfocus() {
      this.patch({
        smooth: {
          color: 0xffffffff,
          scale: 1.0
        },
        shader: {
          type: Lightning$1.shaders.Outline,
          stroke: 0,
          color: 0x0000000
        }
      });
    }
    _handleBack() {
      // Handle the back action, e.g., returning to the main page
      // Implement your logic here to navigate back to the main page.
      // You can change the state or trigger any other action as needed.
      // For example:
      this._stopVideo(); // Stop video playback when going back
      this.signal("backPressed");
    }
  }

  class App extends Lightning$1.Component {
    static getFonts() {
      return [{
        family: "Regular",
        url: Utils.asset("fonts/Roboto-Regular.ttf")
      }];
    }
    static _template() {
      return {
        HelloWorld: {
          w: 1920,
          h: 1080,
          y: 0,
          rect: true,
          color: 0xffffffff,
          src: Utils.asset('images/background.png'),
          FireboltStatus: {},
          Device: {
            mountX: 0.5,
            x: 960,
            y: 900,
            text: {
              text: "Device not Ready!",
              fontFace: "Regular",
              fontSize: 35,
              textColor: 0xff000000
            }
          },
          Localization: {
            mountX: 0.5,
            x: 960,
            y: 950,
            text: {
              text: "loaclization API ==> ",
              fontFace: "Regular",
              fontSize: 35,
              textColor: 0xff000000
            }
          },
          Metrics: {
            mountX: 0.5,
            x: 960,
            y: 1000,
            text: {
              text: "Metrics API ==> ",
              fontFace: "Regular",
              fontSize: 35,
              textColor: 0xff000000
            }
          }
        },
        Slider: {
          w: 800,
          h: 350,
          x: 480,
          y: 350,
          mount: 0.5,
          Wrapper: {}
        },
        Slider: {
          w: 800,
          h: 350,
          x: 480,
          y: 350,
          mount: 0.5,
          Wrapper: {}
        },
        VideoCard: {
          mount: 0.5,
          x: 150,
          y: 130,
          text: {
            text: "Explore",
            fontFace: 'Regular',
            fontSize: 25,
            textColor: 0xffffffff
          }
        },
        Playbutton: {
          // type: MyButton,
          x: 1500,
          y: 770,
          signals: {
            onClick: "handleButtonEnter"
          }
        },
        VideoSection: {
          alpha: 1,
          x: 0,
          y: 0,
          w: 1920,
          h: 1080,
          color: "0xff000000",
          rect: true,
          visible: false,
          HelpMsg: {
            x: 80,
            y: 50,
            w: 1920,
            text: {
              text: "Play the Video using AAMP Player",
              fontSize: 40,
              fontFace: "Regular",
              textAlign: "center",
              lineHeight: 50
            },
            color: "0xffffffff",
            alpha: 1
          },
          Video: {
            x: 0,
            y: 0,
            w: 1920,
            h: 1080,
            type: Lightning$1.components.VideoItem
          }
        }
      };
    }

    //   _getFocused() {
    //     return this.tag("Playbutton");
    //   }
    _init() {
      this.index = 0;
      this.dataLength = 3;
      const buttons = [];
      const videoUrl = "https://amssamples.streaming.mediaservices.windows.net/683f7e47-bd83-4427-b0a3-26a6c4547782/BigBuckBunny.ism/manifest(format=mpd-time-csf)";
      for (let i = 0; i < this.dataLength; i++) {
        buttons.push({
          type: VideoCard,
          x: i * (300 + 30),
          item: {
            label: "Train",
            src: Utils.asset("images/cardImage".concat(i + 1, ".jpg")),
            videoUrl: videoUrl
          }
        }
        //
        );
      }

      this.tag('Wrapper').children = buttons;
    }
    repositionWrapper() {
      const wrapper = this.tag('Wrapper');
      const sliderW = this.tag('Slider').w;
      const currentWrapperX = wrapper.transition('x').targetvalue || wrapper.x;
      const currentFocus = wrapper.children[this.index];
      const currentFocusX = currentFocus.x + currentWrapperX;
      const currentFocusOuterWidth = currentFocus.x + currentFocus.w;
      if (currentFocusX < 0) {
        wrapper.setSmooth('x', -currentFocus.x);
      } else if (currentFocusOuterWidth > sliderW) {
        wrapper.setSmooth('x', sliderW - currentFocusOuterWidth);
      }
    }
    _handleLeft() {
      if (this.index === 0) {
        this.index = this.dataLength - 1;
      } else {
        this.index -= 1;
      }
      this.repositionWrapper();
    }
    _handleRight() {
      if (this.index === this.dataLength - 1) {
        this.index = 0;
      } else {
        this.index += 1;
      }
      this.repositionWrapper();
    }
    _handleEnter() {
      console.log("Enter key pressed on VideoCard");
      console.log("Enter key pressed"); // Log that Enter key was pressed
      // Get the focused video card
      const focusedVideoCard = this._getSliderFocused();
      if (focusedVideoCard) {
        // Handle video playback for the selected video card
        const videoUrl = focusedVideoCard.videoUrl;
        if (videoUrl) {
          console.log("Playing video now..."); // Log that video playback is starting
          this.initiatePlayer(); // Call initiatePlayer() to start playing the video
          this._setState("VideoPlay");
        } else {
          console.log("No video URL found for the focused card.");
        }
      } else {
        console.log("No focused video card found.");
      }
    }
    playVideo(videoUrl) {
      // Implement your video playback logic here using the provided video URL.
      // For example, you can use the AAMPMediaPlayer or any other video player library to play the video.
      // Ensure you have the necessary video player library imported and set up in your component.

      // Example using AAMPMediaPlayer (assuming you have it set up):
      if (this._player) {
        this._player.destroy();
      }
      this._player = new AAMPMediaPlayer();
      this._player.load(videoUrl);
      this._setState("VideoPlay");
    }
    _getSliderFocused() {
      return this.tag('Slider.Wrapper').children[this.index];
    }
    initiatePlayer() {
      const url = "https://amssamples.streaming.mediaservices.windows.net/683f7e47-bd83-4427-b0a3-26a6c4547782/BigBuckBunny.ism/manifest(format=mpd-time-csf)";
      this._player = new AAMPMediaPlayer();
      this._player.load(url);
    }
    static _states() {
      return [class LaunchView extends this {
        _getFocused() {
          return this.tag("Playbutton");
        }
        handleButtonEnter() {
          this.initiatePlayer();
          this._setState("VideoPlay");
        }
        _getFocused() {
          return this._getSliderFocused();
        }
      }, class VideoPlay extends this {
        // _getFocused() {
        //   //return this.tag("VideoSection");
        // }
        $enter() {
          this.tag("VideoSection").visible = true;
          this.tag("HelloWorld").visible = false;
        }
        _handleBack() {
          console.log("back to launchView");
          this.tag("VideoSection").visible = false;
          this.tag("HelloWorld").visible = true;
          this._setState("LaunchView");
        }
      }];
    }
    _setup() {
      // Listen for the "backPressed" signal from VideoCard components
      this.tag("VideoCard").on("backPressed", () => {
        // Implement your logic to navigate back to the main page here
        this.returnToMainPage();
      });
    }
    returnToMainPage() {
      // Implement your logic to return to the main page here
      // For example, change the state or set the visibility of main page components
      // You can also stop any ongoing video playback if necessary.
      this.tag("App").visible = true;
      this.tag("VideoSection").visible = false;
      // Additional logic as needed
    }

    _active() {
      console.log("active set state to launchView");
      this._setState("LaunchView");
      Device.audio().then(supportedAudioProfiles => {
        const newAudio = "audio profile **" + supportedAudioProfiles.stereo;
        Log$1.info("Device", newAudio);
        this.tag("Device").text.text = supportedAudioProfiles + " :: ";
        console.log("Is stereo supported", supportedAudioProfiles.stereo);
      });
      Device.distributor().then(distributor => {
        const deviceDistributor = "distributor:" + distributor;
        Log$1.info(deviceDistributor);
        this.tag("Device").text.text = deviceDistributor + " :: ";
      });
      Device.platform().then(platform => {
        const devicePlatform = "platform:" + platform;
        Log$1.info(devicePlatform);
        this.tag("Device").text.text += devicePlatform + " :: ";
      });
      Device.version().then(version => {
        const deviceVersion = "version:" + version.sdk.readable + " : v" + version.sdk.major + "." + version.sdk.minor + "." + version.sdk.patch;
        Log$1.info(deviceVersion);
        this.tag("Device").text.text += deviceVersion;
      });
      Localization.language().then(lang => {
        const langu = "language:" + lang;
        Log$1.info(langu);
        this.tag("Localization").text.text += langu + " ::";
      });
      Localization.countryCode().then(code => {
        const C_Code = " Country_Code:" + code;
        Log$1.info(C_Code);
        this.tag("Localization").text.text += C_Code + " ";
      });
      Metrics.action("user", "The user did foo", null).then(success => {
        const met_act = " action : " + success;
        Log$1.info(met_act);
        this.tag("Metrics").text.text += met_act + " ";
      });
    }
  }

  function index () {
    return Launch(App, ...arguments);
  }

  return index;

})();
