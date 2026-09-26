export const SHADOWS = [
  { key: 'pride', name: '傲慢', en: 'PRIDE', virtue: '谦逊', virtueKey: 'humility', summary: '你对能力、判断和被认可较敏感。状态紧绷时，维护正确或体面可能压过理解他人。', signal: '留意自己是否把“被质疑”自动理解成“被否定”。', practice: '在回应前先说出一个自己可能忽略的事实，并主动向对方请教一个具体问题。' },
  { key: 'greed', name: '贪婪', en: 'GREED', virtue: '慷慨', virtueKey: 'generosity', summary: '你对资源、机会与安全余量很敏感。压力增大时，储备和占有可能变成持续的不满足。', signal: '留意“还不够”究竟来自现实缺口，还是来自失去控制的担心。', practice: '把真正需要的最低资源写清楚，再选择一件暂时用不到的东西或时间与人分享。' },
  { key: 'desire', name: '迷恋', en: 'DESIRE', virtue: '节制', virtueKey: 'restraint', summary: '你容易被强烈吸引、新鲜感或即时愉悦推动。投入能带来活力，也可能让承诺和边界退到后面。', signal: '留意“我很想要”是否被你误读成“我现在必须行动”。', practice: '为高冲动决定设置一个冷静时段，并复核它是否尊重自己与他人的边界。' },
  { key: 'envy', name: '嫉妒', en: 'ENVY', virtue: '善意', virtueKey: 'kindness', summary: '你会敏锐比较自己与他人的进展。比较能提供方向，也可能把别人的光亮变成对自己的否定。', signal: '留意你是否只看见他人的结果，却忽略双方不同的起点与代价。', practice: '把羡慕拆成一个可学习的具体能力，同时真诚肯定对方的一项努力。' },
  { key: 'wrath', name: '暴怒', en: 'WRATH', virtue: '耐心', virtueKey: 'patience', summary: '你对冒犯、不公和阻碍反应迅速。愤怒能保护边界，但速度过快时会伤及真正想守护的关系。', signal: '留意身体先出现的信号，例如呼吸变浅、肩颈发紧或说话加速。', practice: '在表达立场前先暂停三次呼吸，用“事实—影响—请求”替代攻击和推断。' },
  { key: 'excess', name: '纵欲', en: 'EXCESS', virtue: '适度', virtueKey: 'moderation', summary: '你倾向用更多体验、消费或刺激安抚压力。享受本身没有问题，失去停止信号才会透支之后的自己。', signal: '留意满足已经出现后，你是否仍靠惯性继续获取刺激。', practice: '开始前先决定一个停止点；到点时离开场景十分钟，再判断是否真的需要继续。' },
  { key: 'sloth', name: '懒惰', en: 'SLOTH', virtue: '勤勉', virtueKey: 'diligence', summary: '你可能在任务复杂、回报遥远或害怕做不好时推迟行动。拖延常是回避不适，而不是缺少能力。', signal: '留意自己是否不断准备、整理或等待状态，却没有触碰真正任务。', practice: '把任务缩到十分钟内能完成的第一步，完成后再决定是否继续。' }
];

export const VIRTUES = {
  humility: { name: '谦逊', summary: '承认局限并不削弱价值，它让判断有空间吸收新信息。' },
  generosity: { name: '慷慨', summary: '在边界清楚的前提下分享资源，让安全感不再只依赖占有。' },
  restraint: { name: '节制', summary: '允许吸引存在，同时把行动交还给长期选择与相互尊重。' },
  kindness: { name: '善意', summary: '把比较转化为学习，也让他人的成功可以与自己的成长同时成立。' },
  patience: { name: '耐心', summary: '延迟反应不是压抑，而是为边界找到更准确、更有力量的表达。' },
  moderation: { name: '适度', summary: '享受并感知“已经足够”，在满足与透支之间保留清醒。' },
  diligence: { name: '勤勉', summary: '不等待完美状态，用小而持续的行动穿过回避与畏难。' }
};

const basicGroups = {
  pride: [
    ['当我的方案被质疑时，我会立刻想证明自己更懂。', false],
    ['在共同成果中，我希望别人明确看见我的贡献。', false],
    ['即使犯错，我也不愿轻易承认自己的判断有问题。', false],
    ['我能自然地欣赏别人比我做得更好。', true]
  ],
  greed: [
    ['已经拥有不少时，我仍会担心资源不够。', false],
    ['面对稀缺机会，我会优先替自己多占一点。', false],
    ['看到别人获得好处，我会马上计算自己是否吃亏。', false],
    ['我愿意把暂时用不到的资源分享给需要的人。', true]
  ],
  desire: [
    ['新鲜刺激很容易盖过我原先的承诺。', false],
    ['我常把强烈的吸引理解为必须马上行动。', false],
    ['情绪高涨时，我不太在意之后的代价。', false],
    ['即使很心动，我仍能顾及边界和长期选择。', true]
  ],
  envy: [
    ['别人的成功容易让我先想到自己的不足。', false],
    ['看到同龄人进步更快时，我会感到不平衡。', false],
    ['我经常暗暗比较自己得到的是否比别人少。', false],
    ['我能真心祝福别人取得我也想要的成果。', true]
  ],
  wrath: [
    ['感到被冒犯时，我的语气会很快变得强硬。', false],
    ['事情受阻时，我可能把挫败感带给身边的人。', false],
    ['我曾在气头上说出事后后悔的重话。', false],
    ['即使生气，我也能先停一下再表达立场。', true]
  ],
  excess: [
    ['压力大时，我会用进食、购物或刷屏获得过量安慰。', false],
    ['已经感到满足后，我有时仍很难停下来。', false],
    ['为了即时享受，我会忽略身体或时间发出的提醒。', false],
    ['我通常能在享受刚刚好的时候停下。', true]
  ],
  sloth: [
    ['重要任务只要还不紧迫，我就容易继续往后拖。', false],
    ['面对复杂问题，我常先做不重要的事来回避。', false],
    ['我会用“还没准备好”推迟真正开始。', false],
    ['即使不太想做，我也能先完成最小的一步。', true]
  ]
};

const pairGroups = {
  pride: [
    ['成果亮眼时，我更在意它能否证明自己胜过别人。', 'pride'],
    ['意识到别人更擅长时，我愿意承认并向对方学习。', 'humility'],
    ['被纠正时，我的第一反应通常是维护面子。', 'pride'],
    ['做错事后，我能直接说出自己的判断失误在哪里。', 'humility'],
    ['做共同决策时，我容易认为自己的标准更重要。', 'pride']
  ],
  greed: [
    ['机会有限时，我会想办法让自己得到尽可能多的份额。', 'greed'],
    ['确认自己够用后，我愿意把余量留给更需要的人。', 'generosity'],
    ['拥有越多，我反而越担心失去。', 'greed'],
    ['分享时间或资源时，我能同时守住合理边界。', 'generosity'],
    ['我常把积累本身当作安全感的主要来源。', 'greed']
  ],
  desire: [
    ['强烈心动时，我容易先行动再考虑承诺和后果。', 'desire'],
    ['面对诱惑，我能给自己留出冷静判断的时间。', 'restraint'],
    ['新鲜感消退后，我常发现自己投入得太快。', 'desire'],
    ['即使被吸引，我也会确认彼此边界是否清楚。', 'restraint'],
    ['我容易为了即时满足改变原先的重要计划。', 'desire']
  ],
  envy: [
    ['看到别人取得好成绩时，我会先怀疑自己落后了。', 'envy'],
    ['别人做得更好时，我能够具体学习而不贬低自己。', 'kindness'],
    ['我会因为比较而难以享受自己已经拥有的东西。', 'envy'],
    ['我能把祝福别人和追求自己的目标同时放在心里。', 'kindness'],
    ['同伴获得认可时，我会下意识寻找其中不公平的地方。', 'envy']
  ],
  wrath: [
    ['遇到不合理的事，我常在弄清全貌前就强烈反击。', 'wrath'],
    ['冲突升温时，我能放慢速度再决定怎么回应。', 'patience'],
    ['对方没有立刻理解我时，我会明显变得不耐烦。', 'wrath'],
    ['我能坚定表达边界，而不把对方当成敌人。', 'patience'],
    ['积累的不满常在小事上突然爆发。', 'wrath']
  ],
  excess: [
    ['情绪空落时，我会不断寻找吃、买或刷的刺激。', 'excess'],
    ['享受一件事时，我通常能察觉自己何时已经满足。', 'moderation'],
    ['为了延长愉悦，我容易忽略第二天要承担的代价。', 'excess'],
    ['我会预先设定适量范围，并在到点后停下来。', 'moderation'],
    ['越是疲惫，我越容易过量使用让自己分心的东西。', 'excess']
  ],
  sloth: [
    ['只要任务让我感到笨拙，我就容易先搁置它。', 'sloth'],
    ['即使状态普通，我也能按照节奏推进一点。', 'diligence'],
    ['我会花很多时间规划，却迟迟不做关键动作。', 'sloth'],
    ['我习惯把大任务拆成当天能完成的小步骤。', 'diligence'],
    ['没有外部催促时，我很难持续处理重要但不紧急的事。', 'sloth']
  ]
};

export function buildQuestions(mode = 'shadow') {
  if (mode === 'balance') {
    return SHADOWS.flatMap((shadow, groupIndex) => pairGroups[shadow.key].map(([text, pole], index) => ({
      id: `balance-${shadow.key}-${index + 1}`,
      mode,
      group: shadow.key,
      pole,
      text,
      order: index * SHADOWS.length + groupIndex
    }))).sort((a, b) => a.order - b.order);
  }
  return SHADOWS.flatMap((shadow, groupIndex) => basicGroups[shadow.key].map(([text, reverse], index) => ({
    id: `shadow-${shadow.key}-${index + 1}`,
    mode,
    group: shadow.key,
    reverse,
    text,
    order: index * SHADOWS.length + groupIndex
  }))).sort((a, b) => a.order - b.order);
}

function blankTotals(keys) {
  return Object.fromEntries(keys.map(key => [key, { points: 0, max: 0 }]));
}

export function scoreAnswers(mode, questions, answers) {
  if (!Array.isArray(questions) || !Array.isArray(answers) || questions.length !== answers.length) {
    throw new Error('题目与答案数量必须一致');
  }
  if (answers.some(answer => !Number.isInteger(answer) || answer < 0 || answer > 4)) {
    throw new Error('每道题都必须是 0 到 4 的整数');
  }

  if (mode === 'balance') {
    const keys = SHADOWS.flatMap(item => [item.key, item.virtueKey]);
    const totals = blankTotals(keys);
    questions.forEach((question, index) => {
      const shadow = SHADOWS.find(item => item.key === question.group);
      const opposite = question.pole === shadow.key ? shadow.virtueKey : shadow.key;
      totals[question.pole].points += answers[index];
      totals[question.pole].max += 4;
      totals[opposite].points += 4 - answers[index];
      totals[opposite].max += 4;
    });
    const scores = Object.fromEntries(Object.entries(totals).map(([key, value]) => [key, Math.round(value.points / value.max * 100)]));
    return { mode, scores };
  }

  const totals = blankTotals(SHADOWS.map(item => item.key));
  questions.forEach((question, index) => {
    totals[question.group].points += question.reverse ? 4 - answers[index] : answers[index];
    totals[question.group].max += 4;
  });
  const scores = Object.fromEntries(Object.entries(totals).map(([key, value]) => [key, Math.round(value.points / value.max * 100)]));
  return { mode: 'shadow', scores };
}

const STORAGE_KEY = 'sevenfold-progress-v1';
const state = { mode: 'shadow', questions: [], answers: [], index: 0, locked: false, result: null };
const labels = ['完全不符合', '比较不符合', '说不清', '比较符合', '完全符合'];
let toastTimer;

function element(id) { return document.getElementById(id); }

function showScreen(name) {
  ['start', 'test', 'result'].forEach(id => { element(`${id}-screen`).hidden = id !== name; });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ mode: state.mode, answers: state.answers, index: state.index }));
  } catch { /* Some embedded browsers disable storage. The test remains usable in memory. */ }
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const total = saved?.mode === 'balance' ? 35 : 28;
    if (!['shadow', 'balance'].includes(saved?.mode) || !Array.isArray(saved?.answers) || saved.answers.length > total) return null;
    return saved;
  } catch { return null; }
}

function clearProgress() {
  try { localStorage.removeItem(STORAGE_KEY); } catch { /* no-op */ }
}

function updateResume() {
  const saved = loadProgress();
  element('resume-panel').hidden = !saved;
  if (saved) {
    const total = saved.mode === 'balance' ? 35 : 28;
    element('resume-button').textContent = `继续${saved.mode === 'balance' ? '平衡版' : '阴影版'} · ${Math.min(saved.index + 1, total)} / ${total}`;
  }
}

function begin(mode, saved = null) {
  state.mode = mode;
  state.questions = buildQuestions(mode);
  state.answers = Array(state.questions.length).fill(null);
  if (saved) saved.answers.slice(0, state.answers.length).forEach((answer, index) => { state.answers[index] = answer; });
  state.index = Math.min(Math.max(saved?.index ?? 0, 0), state.questions.length - 1);
  state.locked = false;
  showScreen('test');
  renderQuestion();
  saveProgress();
}

function renderQuestion() {
  const question = state.questions[state.index];
  const shadow = SHADOWS.find(item => item.key === question.group);
  const total = state.questions.length;
  const answered = state.answers.filter(Number.isInteger).length;
  const progress = Math.round(answered / total * 100);
  element('mode-name').textContent = state.mode === 'balance' ? '平衡版' : '阴影版';
  element('question-progress').textContent = `${state.index + 1} / ${total}`;
  element('dimension-name').textContent = state.mode === 'balance' ? `本题观察：${shadow.name} × ${shadow.virtue}` : `本题观察：${shadow.name}`;
  element('question-text').textContent = question.text;
  element('question-hint').textContent = state.mode === 'balance' ? '这句话与你通常的状态有多接近？' : '请选择最接近你通常状态的答案。';
  element('progress-fill').style.transform = `scaleX(${progress / 100})`;
  document.querySelector('.progress-track').setAttribute('aria-valuenow', String(progress));
  element('previous-question').disabled = state.index === 0;
  element('answer-list').innerHTML = labels.map((label, value) => `
    <button class="answer-option${state.answers[state.index] === value ? ' selected' : ''}" type="button" data-value="${value}" aria-pressed="${state.answers[state.index] === value}">
      <span class="answer-key">${value + 1}</span><span>${label}</span>
    </button>`).join('');
  document.querySelectorAll('.answer-option').forEach(button => button.addEventListener('click', () => chooseAnswer(Number(button.dataset.value))));
  state.locked = false;
  element('question-text').focus?.({ preventScroll: true });
}

function chooseAnswer(value) {
  if (state.locked) return;
  state.locked = true;
  state.answers[state.index] = value;
  document.querySelectorAll('.answer-option').forEach(button => {
    const selected = Number(button.dataset.value) === value;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
    button.disabled = true;
  });
  saveProgress();
  window.setTimeout(() => {
    if (state.index < state.questions.length - 1) {
      state.index += 1;
      renderQuestion();
      saveProgress();
    } else {
      finishTest();
    }
  }, 150);
}

function finishTest() {
  if (state.answers.some(answer => !Number.isInteger(answer))) {
    showToast('还有题目没有完成');
    return;
  }
  state.result = scoreAnswers(state.mode, state.questions, state.answers);
  clearProgress();
  renderResult(state.result);
  showScreen('result');
  history.replaceState(null, '', `${location.pathname}?r=${encodeResult(state.result)}`);
}

function sortedShadows(result) {
  return [...SHADOWS].sort((a, b) => result.scores[b.key] - result.scores[a.key]);
}

function renderResult(result) {
  const ranked = sortedShadows(result);
  const primary = ranked[0];
  const secondary = ranked[1];
  const isBalance = result.mode === 'balance';
  element('result-title').textContent = `${primary.name}是此刻最响的信号`;
  element('result-lead').textContent = isBalance
    ? `这不是固定标签。你的读数显示，${primary.name}较容易在压力中出现，而${primary.virtue}是最值得优先练习的平衡方向。`
    : `你的回答更常指向${primary.name}，其次是${secondary.name}。它们不是缺点清单，而是压力、需要与边界发出的提示。`;

  const core = [
    `<article class="core-item"><h3>${primary.name} · ${result.scores[primary.key]}%</h3><p>${primary.summary} ${primary.signal}</p></article>`,
    isBalance
      ? `<article class="core-item"><h3>${primary.virtue} · ${result.scores[primary.virtueKey]}%</h3><p>${VIRTUES[primary.virtueKey].summary}</p></article>`
      : `<article class="core-item"><h3>${secondary.name} · ${result.scores[secondary.key]}%</h3><p>${secondary.summary}</p></article>`
  ];
  element('core-reading').innerHTML = core.join('');
  element('practice-copy').textContent = primary.practice;
  element('result-radar').innerHTML = radarSvg(result);
  element('score-list').innerHTML = isBalance ? renderBalanceScores(result) : renderShadowScores(result);
}

function renderShadowScores(result) {
  return SHADOWS.map(item => `
    <div class="score-row">
      <div class="score-labels"><span>${item.name}</span><span>${result.scores[item.key]}%</span></div>
      <div class="score-track" aria-label="${item.name} ${result.scores[item.key]}%"><span style="width:${result.scores[item.key]}%"></span></div>
    </div>`).join('');
}

function renderBalanceScores(result) {
  return SHADOWS.map(item => {
    const shadowScore = result.scores[item.key];
    const virtueScore = result.scores[item.virtueKey];
    const total = shadowScore + virtueScore || 1;
    const left = Math.round(shadowScore / total * 100);
    const right = 100 - left;
    return `
      <div class="score-row">
        <div class="score-labels"><span>${item.name} ${shadowScore}%</span><span>${virtueScore}% ${item.virtue}</span></div>
        <div class="balance-track" style="--left:${left}%;--right:${right}%" aria-label="${item.name} ${shadowScore}%，${item.virtue} ${virtueScore}%"><span></span><span></span></div>
      </div>`;
  }).join('');
}

function point(angle, radius, center = 150) {
  const radians = (angle - 90) * Math.PI / 180;
  return `${(center + Math.cos(radians) * radius).toFixed(1)},${(center + Math.sin(radians) * radius).toFixed(1)}`;
}

function polygonPoints(values, radius = 104) {
  return values.map((value, index) => point(index * 360 / values.length, radius * value / 100)).join(' ');
}

function radarSvg(result) {
  const values = SHADOWS.map(item => result.scores[item.key]);
  const rings = [25, 50, 75, 100].map(level => `<polygon class="radar-grid" points="${polygonPoints(Array(7).fill(level))}"/>`).join('');
  const axes = SHADOWS.map((_, index) => `<line class="radar-axis" x1="150" y1="150" x2="${point(index * 360 / 7, 104).replace(',', '" y2="')}"/>`).join('');
  const labelsMarkup = SHADOWS.map((item, index) => {
    const [x, y] = point(index * 360 / 7, 128).split(',');
    return `<text class="radar-label" x="${x}" y="${Number(y) + 4}" text-anchor="middle">${item.name}</text>`;
  }).join('');
  const dots = values.map((value, index) => {
    const [cx, cy] = point(index * 360 / 7, 104 * value / 100).split(',');
    return `<circle class="radar-dot" cx="${cx}" cy="${cy}" r="3"/>`;
  }).join('');
  return `<svg viewBox="0 0 300 300" role="img" aria-label="七项阴影倾向雷达图">${rings}${axes}<polygon class="radar-shape" points="${polygonPoints(values)}"/>${dots}${labelsMarkup}</svg>`;
}

export function encodeResult(result) {
  const bytes = new TextEncoder().encode(JSON.stringify(result));
  let binary = '';
  bytes.forEach(byte => { binary += String.fromCharCode(byte); });
  return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
}

export function decodeResult(payload) {
  try {
    const normalized = payload.replaceAll('-', '+').replaceAll('_', '/');
    const binary = atob(normalized + '='.repeat((4 - normalized.length % 4) % 4));
    const bytes = Uint8Array.from(binary, character => character.charCodeAt(0));
    const result = JSON.parse(new TextDecoder().decode(bytes));
    const requiredKeys = result?.mode === 'balance' ? SHADOWS.flatMap(item => [item.key, item.virtueKey]) : SHADOWS.map(item => item.key);
    if (!['shadow', 'balance'].includes(result?.mode) || !requiredKeys.every(key => Number.isInteger(result.scores?.[key]) && result.scores[key] >= 0 && result.scores[key] <= 100)) return null;
    return result;
  } catch { return null; }
}

async function share(kind = 'test') {
  const url = kind === 'result' && state.result ? `${location.origin}${location.pathname}?r=${encodeResult(state.result)}` : `${location.origin}${location.pathname}`;
  const primary = state.result ? sortedShadows(state.result)[0] : null;
  const data = kind === 'result' && primary
    ? { title: '七相心镜测试结果', text: `我在七相心镜中最明显的信号是${primary.name}。`, url }
    : { title: '七相心镜', text: '看看七种阴影如何转向七种平衡力量。', url };
  try {
    if (navigator.share) await navigator.share(data);
    else {
      await navigator.clipboard.writeText(`${data.text} ${url}`);
      showToast('链接已复制');
    }
  } catch (error) {
    if (error?.name !== 'AbortError') showToast('暂时无法分享，请复制浏览器地址');
  }
}

function showToast(message) {
  const toast = element('toast');
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  toastTimer = window.setTimeout(() => { toast.hidden = true; }, 2200);
}

function goHome() {
  showScreen('start');
  history.replaceState(null, '', location.pathname);
  updateResume();
}

function bindEvents() {
  document.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => begin(button.dataset.mode)));
  element('resume-button').addEventListener('click', () => {
    const saved = loadProgress();
    if (saved) begin(saved.mode, saved);
  });
  element('previous-question').addEventListener('click', () => {
    if (state.index === 0 || state.locked) return;
    state.index -= 1;
    renderQuestion();
    saveProgress();
  });
  element('leave-test').addEventListener('click', goHome);
  element('home-button').addEventListener('click', goHome);
  element('restart-test').addEventListener('click', () => {
    clearProgress();
    state.result = null;
    goHome();
  });
  element('top-share').addEventListener('click', () => share(state.result && !element('result-screen').hidden ? 'result' : 'test'));
  element('start-share').addEventListener('click', () => share('test'));
  element('share-result').addEventListener('click', () => share('result'));
  document.addEventListener('keydown', event => {
    if (element('test-screen').hidden || state.locked) return;
    const value = Number(event.key) - 1;
    if (value >= 0 && value <= 4) chooseAnswer(value);
    if (event.key === 'ArrowLeft' && state.index > 0) {
      state.index -= 1;
      renderQuestion();
      saveProgress();
    }
  });
}

function init() {
  bindEvents();
  const payload = new URLSearchParams(location.search).get('r');
  const shared = payload ? decodeResult(payload) : null;
  if (shared) {
    state.result = shared;
    renderResult(shared);
    showScreen('result');
  } else {
    if (payload) showToast('结果链接无效，已返回首页');
    showScreen('start');
    updateResume();
  }
}

if (typeof document !== 'undefined') init();
