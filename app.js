'use strict';

/* ================= DATA ================= */
const EXERCISES = [
  {id:'bench_press',name:'Bench Press',muscle:'Chest',eq:['barbell'],type:'strength',e:'🏋️'},
  {id:'incline_bench',name:'Incline Bench Press',muscle:'Chest',eq:['barbell'],type:'strength',e:'📈'},
  {id:'incline_db_press',name:'Incline DB Press',muscle:'Chest',eq:['dumbbell'],type:'strength',e:'💪'},
  {id:'machine_chest_press',name:'Machine Chest Press',muscle:'Chest',eq:['machine'],type:'strength',e:'⚙️'},
  {id:'chest_fly',name:'Chest Fly',muscle:'Chest',eq:['dumbbell','cable'],type:'strength',e:'🦅'},
  {id:'cable_crossover',name:'Cable Crossover',muscle:'Chest',eq:['cable'],type:'strength',e:'🔗'},
  {id:'pushup',name:'Push-Up',muscle:'Chest',eq:['bodyweight'],type:'strength',e:'⬆️'},
  {id:'diamond_pushup',name:'Diamond Push-Up',muscle:'Chest',eq:['bodyweight'],type:'strength',e:'💎'},
  {id:'dips',name:'Dips',muscle:'Chest',eq:['bodyweight'],type:'strength',e:'⬇️'},
  {id:'pullup',name:'Pull-Up',muscle:'Back',eq:['bodyweight','pullup_bar'],type:'strength',e:'🆙'},
  {id:'deadlift',name:'Deadlift',muscle:'Back',eq:['barbell'],type:'strength',e:'💀'},
  {id:'barbell_row',name:'Barbell Row',muscle:'Back',eq:['barbell'],type:'strength',e:'🔁'},
  {id:'db_row',name:'Single Arm DB Row',muscle:'Back',eq:['dumbbell'],type:'strength',e:'💪'},
  {id:'lat_pulldown',name:'Lat Pulldown',muscle:'Back',eq:['cable','machine'],type:'strength',e:'⬇️'},
  {id:'wide_pulldown',name:'Wide Grip Pulldown',muscle:'Back',eq:['cable'],type:'strength',e:'↔️'},
  {id:'seated_row',name:'Seated Cable Row',muscle:'Back',eq:['cable'],type:'strength',e:'🚣'},
  {id:'face_pull',name:'Face Pull',muscle:'Back',eq:['cable'],type:'strength',e:'😤'},
  {id:'rdl',name:'Romanian Deadlift',muscle:'Back',eq:['barbell','dumbbell'],type:'strength',e:'🏗️'},
  {id:'ohp',name:'Overhead Press',muscle:'Shoulders',eq:['barbell'],type:'strength',e:'☝️'},
  {id:'db_ohp',name:'DB Shoulder Press',muscle:'Shoulders',eq:['dumbbell'],type:'strength',e:'💪'},
  {id:'arnold_press',name:'Arnold Press',muscle:'Shoulders',eq:['dumbbell'],type:'strength',e:'🦾'},
  {id:'lateral_raise',name:'Lateral Raise',muscle:'Shoulders',eq:['dumbbell','cable'],type:'strength',e:'🦁'},
  {id:'cable_lateral',name:'Cable Lateral Raise',muscle:'Shoulders',eq:['cable'],type:'strength',e:'🔗'},
  {id:'front_raise',name:'Front Raise',muscle:'Shoulders',eq:['dumbbell'],type:'strength',e:'⬆️'},
  {id:'rear_delt_fly',name:'Rear Delt Fly',muscle:'Shoulders',eq:['dumbbell','cable'],type:'strength',e:'🦋'},
  {id:'shrugs',name:'Shrugs',muscle:'Shoulders',eq:['barbell','dumbbell'],type:'strength',e:'🤷'},
  {id:'bicep_curl',name:'Bicep Curl',muscle:'Arms',eq:['dumbbell','barbell'],type:'strength',e:'💪'},
  {id:'hammer_curl',name:'Hammer Curl',muscle:'Arms',eq:['dumbbell'],type:'strength',e:'🔨'},
  {id:'preacher_curl',name:'Preacher Curl',muscle:'Arms',eq:['barbell','machine'],type:'strength',e:'🙏'},
  {id:'cable_curl',name:'Cable Curl',muscle:'Arms',eq:['cable'],type:'strength',e:'🔗'},
  {id:'concentration_curl',name:'Concentration Curl',muscle:'Arms',eq:['dumbbell'],type:'strength',e:'🧠'},
  {id:'incline_curl',name:'Incline DB Curl',muscle:'Arms',eq:['dumbbell'],type:'strength',e:'📐'},
  {id:'tricep_pushdown',name:'Tricep Pushdown',muscle:'Arms',eq:['cable'],type:'strength',e:'⬇️'},
  {id:'rope_pushdown',name:'Rope Pushdown',muscle:'Arms',eq:['cable'],type:'strength',e:'🪢'},
  {id:'skull_crusher',name:'Skull Crusher',muscle:'Arms',eq:['barbell','dumbbell'],type:'strength',e:'💀'},
  {id:'overhead_tricep',name:'Overhead Tricep Ext',muscle:'Arms',eq:['dumbbell','cable'],type:'strength',e:'☝️'},
  {id:'tricep_kickback',name:'Tricep Kickback',muscle:'Arms',eq:['dumbbell'],type:'strength',e:'🦵'},
  {id:'close_grip_bench',name:'Close Grip Bench',muscle:'Arms',eq:['barbell'],type:'strength',e:'🤏'},
  {id:'squat',name:'Barbell Squat',muscle:'Legs',eq:['barbell'],type:'strength',e:'🏋️'},
  {id:'front_squat',name:'Front Squat',muscle:'Legs',eq:['barbell'],type:'strength',e:'🎯'},
  {id:'hack_squat',name:'Hack Squat',muscle:'Legs',eq:['machine'],type:'strength',e:'⚙️'},
  {id:'db_squat',name:'Goblet Squat',muscle:'Legs',eq:['dumbbell'],type:'strength',e:'🏺'},
  {id:'leg_press',name:'Leg Press',muscle:'Legs',eq:['machine'],type:'strength',e:'🦵'},
  {id:'lunges',name:'Lunges',muscle:'Legs',eq:['bodyweight','dumbbell'],type:'strength',e:'🚶'},
  {id:'bulgarian_split',name:'Bulgarian Split Squat',muscle:'Legs',eq:['bodyweight','dumbbell'],type:'strength',e:'🧗'},
  {id:'step_up',name:'Step Up',muscle:'Legs',eq:['bodyweight','dumbbell'],type:'strength',e:'🪜'},
  {id:'leg_extension',name:'Leg Extension',muscle:'Legs',eq:['machine'],type:'strength',e:'🦵'},
  {id:'leg_curl',name:'Leg Curl',muscle:'Legs',eq:['machine'],type:'strength',e:'🔄'},
  {id:'seated_leg_curl',name:'Seated Leg Curl',muscle:'Legs',eq:['machine'],type:'strength',e:'💺'},
  {id:'calf_raise',name:'Calf Raise',muscle:'Legs',eq:['machine','bodyweight'],type:'strength',e:'🦶'},
  {id:'seated_calf',name:'Seated Calf Raise',muscle:'Legs',eq:['machine'],type:'strength',e:'🪑'},
  {id:'hip_thrust',name:'Hip Thrust',muscle:'Legs',eq:['barbell'],type:'strength',e:'🍑'},
  {id:'glute_bridge',name:'Glute Bridge',muscle:'Legs',eq:['bodyweight','barbell'],type:'strength',e:'🌉'},
  {id:'sumo_deadlift',name:'Sumo Deadlift',muscle:'Legs',eq:['barbell'],type:'strength',e:'🤼'},
  {id:'plank',name:'Plank',muscle:'Core',eq:['bodyweight'],type:'strength',e:'🧘'},
  {id:'crunch',name:'Crunch',muscle:'Core',eq:['bodyweight'],type:'strength',e:'🌀'},
  {id:'bicycle_crunch',name:'Bicycle Crunch',muscle:'Core',eq:['bodyweight'],type:'strength',e:'🚴'},
  {id:'russian_twist',name:'Russian Twist',muscle:'Core',eq:['bodyweight','dumbbell'],type:'strength',e:'🌀'},
  {id:'leg_raise',name:'Leg Raise',muscle:'Core',eq:['bodyweight'],type:'strength',e:'🦵'},
  {id:'hanging_leg_raise',name:'Hanging Leg Raise',muscle:'Core',eq:['pullup_bar'],type:'strength',e:'🏗️'},
  {id:'cable_crunch',name:'Cable Crunch',muscle:'Core',eq:['cable'],type:'strength',e:'🔗'},
  {id:'ab_wheel',name:'Ab Wheel',muscle:'Core',eq:['bodyweight'],type:'strength',e:'⚙️'},
  {id:'treadmill',name:'Treadmill',muscle:'Cardio',eq:['machine'],type:'cardio',e:'🏃'},
  {id:'elliptical',name:'Elliptical',muscle:'Cardio',eq:['machine'],type:'cardio',e:'🌀'},
  {id:'stationary_bike',name:'Stationary Bike',muscle:'Cardio',eq:['machine'],type:'cardio',e:'🚴'},
  {id:'rowing_machine',name:'Rowing Machine',muscle:'Cardio',eq:['machine'],type:'cardio',e:'🚣'},
  {id:'stairmaster',name:'StairMaster',muscle:'Cardio',eq:['machine'],type:'cardio',e:'🪜'},
  {id:'jump_rope',name:'Jump Rope',muscle:'Cardio',eq:['bodyweight'],type:'cardio',e:'🪢'},
  {id:'running',name:'Running (Outdoor)',muscle:'Cardio',eq:['bodyweight'],type:'cardio',e:'🏃'},
  {id:'cycling',name:'Cycling (Outdoor)',muscle:'Cardio',eq:['bodyweight'],type:'cardio',e:'🚲'},
  {id:'swimming',name:'Swimming',muscle:'Cardio',eq:['bodyweight'],type:'cardio',e:'🏊'},
  {id:'burpees',name:'Burpees',muscle:'Cardio',eq:['bodyweight'],type:'cardio',e:'🤸'},
];

const TEMPLATES = [
  {id:'push_a',name:'Push Day A',tags:['Push','Chest','Shoulders'],ex:['bench_press','incline_db_press','ohp','lateral_raise','tricep_pushdown','skull_crusher'],sets:4,e:'🔴',d:'Chest, shoulders & triceps'},
  {id:'push_b',name:'Push Day B',tags:['Push','Chest','Shoulders'],ex:['incline_bench','machine_chest_press','db_ohp','cable_lateral','rope_pushdown','overhead_tricep'],sets:4,e:'🔴',d:'Push variation, more isolation'},
  {id:'pull_a',name:'Pull Day A',tags:['Pull','Back','Arms'],ex:['deadlift','barbell_row','lat_pulldown','seated_row','bicep_curl','hammer_curl'],sets:4,e:'🔵',d:'Back & biceps, compound focus'},
  {id:'pull_b',name:'Pull Day B',tags:['Pull','Back','Arms'],ex:['rdl','pullup','db_row','wide_pulldown','face_pull','cable_curl'],sets:4,e:'🔵',d:'Pull variation, posterior chain'},
  {id:'legs_a',name:'Leg Day A',tags:['Legs'],ex:['squat','leg_press','lunges','leg_extension','leg_curl','calf_raise'],sets:4,e:'🟢',d:'Quad-dominant lower body'},
  {id:'legs_b',name:'Leg Day B',tags:['Legs'],ex:['sumo_deadlift','hip_thrust','bulgarian_split','seated_leg_curl','leg_extension','seated_calf'],sets:4,e:'🟢',d:'Hamstring & glute focus'},
  {id:'chest_day',name:'Chest Day',tags:['Chest'],ex:['bench_press','incline_bench','incline_db_press','chest_fly','cable_crossover','dips'],sets:4,e:'💪',d:'Full chest — upper, mid & lower'},
  {id:'back_day',name:'Back Day',tags:['Back'],ex:['deadlift','pullup','barbell_row','lat_pulldown','seated_row','face_pull'],sets:4,e:'🔙',d:'Full back — width & thickness'},
  {id:'shoulder_day',name:'Shoulder Day',tags:['Shoulders'],ex:['ohp','db_ohp','lateral_raise','front_raise','rear_delt_fly','shrugs'],sets:4,e:'🏔️',d:'All three deltoid heads'},
  {id:'arm_day',name:'Arm Day',tags:['Arms'],ex:['bicep_curl','skull_crusher','hammer_curl','tricep_pushdown','preacher_curl','overhead_tricep'],sets:4,e:'💪',d:'Biceps & triceps'},
  {id:'bicep_day',name:'Bicep Day',tags:['Arms'],ex:['bicep_curl','hammer_curl','preacher_curl','cable_curl','concentration_curl','incline_curl'],sets:4,e:'💪',d:'Full bicep isolation'},
  {id:'tricep_day',name:'Tricep Day',tags:['Arms'],ex:['close_grip_bench','skull_crusher','tricep_pushdown','rope_pushdown','overhead_tricep','tricep_kickback'],sets:4,e:'🔱',d:'Full tricep isolation'},
  {id:'quad_focus',name:'Quad Focus',tags:['Legs'],ex:['squat','front_squat','leg_press','leg_extension','hack_squat','calf_raise'],sets:4,e:'🦵',d:'Quad specialisation'},
  {id:'ham_focus',name:'Hamstring & Glutes',tags:['Legs'],ex:['rdl','hip_thrust','bulgarian_split','seated_leg_curl','glute_bridge','step_up'],sets:4,e:'🍑',d:'Posterior chain'},
  {id:'core_day',name:'Core Day',tags:['Core'],ex:['plank','hanging_leg_raise','cable_crunch','russian_twist','ab_wheel','bicycle_crunch'],sets:3,e:'⚡',d:'Abs, obliques & lower abs'},
  {id:'upper_a',name:'Upper A — Strength',tags:['Upper'],ex:['bench_press','barbell_row','ohp','lat_pulldown','bicep_curl','tricep_pushdown'],sets:4,e:'🟡',d:'Heavy compound focus'},
  {id:'upper_b',name:'Upper B — Hypertrophy',tags:['Upper'],ex:['incline_db_press','db_row','lateral_raise','cable_crossover','hammer_curl','skull_crusher'],sets:4,e:'🟡',d:'Volume & isolation'},
  {id:'lower_a',name:'Lower A — Strength',tags:['Legs'],ex:['squat','rdl','leg_press','leg_curl','calf_raise','plank'],sets:4,e:'🟠',d:'Squat & hinge patterns'},
  {id:'lower_b',name:'Lower B — Hypertrophy',tags:['Legs'],ex:['hip_thrust','bulgarian_split','leg_extension','seated_leg_curl','lunges','seated_calf'],sets:4,e:'🟠',d:'Volume & glute focus'},
  {id:'full_a',name:'Full Body A',tags:['Full Body'],ex:['squat','bench_press','barbell_row','ohp','deadlift','plank'],sets:3,e:'⚪',d:'All major muscles'},
  {id:'full_b',name:'Full Body B',tags:['Full Body'],ex:['front_squat','incline_db_press','pullup','db_ohp','rdl','ab_wheel'],sets:3,e:'⚪',d:'Different movement patterns'},
  {id:'full_c',name:'Full Body C',tags:['Full Body'],ex:['leg_press','dips','lat_pulldown','lateral_raise','leg_curl','bicycle_crunch'],sets:3,e:'⚪',d:'Machine friendly'},
  {id:'bw',name:'Bodyweight Circuit',tags:['Bodyweight'],ex:['pushup','pullup','lunges','dips','crunch','plank'],sets:3,e:'🤸',d:'No equipment needed'},
  {id:'bw_adv',name:'Bodyweight Advanced',tags:['Bodyweight'],ex:['diamond_pushup','pullup','bulgarian_split','dips','hanging_leg_raise','ab_wheel'],sets:4,e:'🤸',d:'Advanced calisthenics'},
  {id:'power',name:'Powerlifting Day',tags:['Strength'],ex:['squat','bench_press','deadlift','ohp','barbell_row'],sets:5,e:'🏋️',d:'The big 5 — pure strength'},
  {id:'cardio_mix',name:'Cardio Session',tags:['Cardio'],ex:['treadmill','stationary_bike','rowing_machine'],sets:1,e:'🏃',d:'Mixed cardio machines'},
  {id:'chest_tri',name:'Chest & Triceps',tags:['Push','Chest','Arms'],ex:['bench_press','incline_db_press','chest_fly','dips','tricep_pushdown','skull_crusher'],sets:4,e:'🔴',d:'Classic bro split'},
  {id:'back_bi',name:'Back & Biceps',tags:['Pull','Back','Arms'],ex:['pullup','barbell_row','lat_pulldown','seated_row','bicep_curl','hammer_curl'],sets:4,e:'🔵',d:'Classic bro split'},
];

const FOOD_DB = [
  {id:'cucumber',n:'Cucumber',e:'🥒',cat:'Vegetables',p100:{c:15,p:0.7,cb:3.6,f:0.1},por:[{l:'100g',g:100},{l:'½ cucumber ~150g',g:150},{l:'1 whole ~300g',g:300}]},
  {id:'tomato',n:'Tomato',e:'🍅',cat:'Vegetables',p100:{c:18,p:0.9,cb:3.9,f:0.2},por:[{l:'100g',g:100},{l:'1 medium ~120g',g:120},{l:'1 large ~180g',g:180}]},
  {id:'pickle',n:'Pickle',e:'🥒',cat:'Vegetables',p100:{c:11,p:0.4,cb:2.3,f:0.1},por:[{l:'100g',g:100},{l:'1 small ~60g',g:60},{l:'1 large ~135g',g:135}]},
  {id:'green_apple',n:'Green Apple',e:'🍏',cat:'Fruits',p100:{c:52,p:0.3,cb:13.8,f:0.2},por:[{l:'100g',g:100},{l:'1 medium ~180g',g:180},{l:'1 large ~220g',g:220}]},
  {id:'banana',n:'Banana',e:'🍌',cat:'Fruits',p100:{c:89,p:1.1,cb:23,f:0.3},por:[{l:'100g',g:100},{l:'1 medium ~120g',g:120},{l:'1 large ~150g',g:150}]},
  {id:'orange',n:'Orange',e:'🍊',cat:'Fruits',p100:{c:47,p:0.9,cb:12,f:0.1},por:[{l:'100g',g:100},{l:'1 medium ~180g',g:180}]},
  {id:'watermelon',n:'Watermelon',e:'🍉',cat:'Fruits',p100:{c:30,p:0.6,cb:7.6,f:0.2},por:[{l:'100g',g:100},{l:'1 slice ~300g',g:300}]},
  {id:'chicken_fried',n:'Chicken Fillet – Fried',e:'🍗',cat:'Protein',p100:{c:219,p:27,cb:0,f:12},por:[{l:'100g',g:100},{l:'1 fillet ~180g',g:180},{l:'Large ~250g',g:250}]},
  {id:'chicken_boiled',n:'Chicken Fillet – Boiled',e:'🍗',cat:'Protein',p100:{c:165,p:31,cb:0,f:3.6},por:[{l:'100g',g:100},{l:'1 fillet ~180g',g:180},{l:'Large ~250g',g:250}]},
  {id:'egg_fried',n:'Egg – Fried',e:'🍳',cat:'Protein',p100:{c:196,p:14,cb:0.4,f:15},por:[{l:'1 egg ~60g',g:60},{l:'2 eggs',g:120},{l:'3 eggs',g:180}]},
  {id:'egg_boiled',n:'Egg – Boiled',e:'🥚',cat:'Protein',p100:{c:155,p:13,cb:1.1,f:11},por:[{l:'1 egg ~60g',g:60},{l:'2 eggs',g:120},{l:'3 eggs',g:180}]},
  {id:'beef',n:'Beef – Cooked',e:'🥩',cat:'Protein',p100:{c:250,p:26,cb:0,f:15},por:[{l:'100g',g:100},{l:'Portion ~200g',g:200}]},
  {id:'tuna',n:'Tuna – Canned',e:'🐟',cat:'Protein',p100:{c:116,p:26,cb:0,f:1},por:[{l:'½ can ~80g',g:80},{l:'1 can ~160g',g:160}]},
  {id:'protein_shake',n:'Whey Protein Shake',e:'🥤',cat:'Protein',p100:{c:380,p:75,cb:10,f:6},por:[{l:'1 scoop ~30g',g:30},{l:'2 scoops ~60g',g:60}]},
  {id:'bread',n:'White Bread',e:'🍞',cat:'Carbs',p100:{c:265,p:9,cb:49,f:3.2},por:[{l:'1 slice ~30g',g:30},{l:'2 slices',g:60},{l:'100g',g:100}]},
  {id:'rice',n:'Rice – Cooked',e:'🍚',cat:'Carbs',p100:{c:130,p:2.7,cb:28,f:0.3},por:[{l:'100g',g:100},{l:'Portion ~200g',g:200},{l:'Large ~300g',g:300}]},
  {id:'gomi',n:'Gomi (Georgian Cornmeal)',e:'🌽',cat:'Carbs',p100:{c:92,p:2,cb:19,f:0.5},por:[{l:'100g',g:100},{l:'Portion ~250g',g:250},{l:'Large ~350g',g:350}]},
  {id:'pasta',n:'Pasta – Cooked',e:'🍝',cat:'Carbs',p100:{c:158,p:5.8,cb:31,f:0.9},por:[{l:'100g',g:100},{l:'Portion ~200g',g:200}]},
  {id:'potato',n:'Potato – Boiled',e:'🥔',cat:'Carbs',p100:{c:87,p:1.9,cb:20,f:0.1},por:[{l:'100g',g:100},{l:'1 medium ~150g',g:150}]},
  {id:'oats',n:'Oats – Cooked',e:'🥣',cat:'Carbs',p100:{c:71,p:2.5,cb:12,f:1.5},por:[{l:'Bowl ~200g',g:200},{l:'Large ~300g',g:300}]},
  {id:'khinkali',n:'Khinkali',e:'🥟',cat:'Georgian',p100:{c:195,p:9,cb:22,f:8},por:[{l:'1 piece ~55g',g:55},{l:'3 pieces',g:165},{l:'5 pieces',g:275},{l:'10 pieces',g:550}]},
  {id:'sour_cream',n:'Sour Cream 15%',e:'🥛',cat:'Dairy',p100:{c:162,p:2.7,cb:3.6,f:15},por:[{l:'1 tbsp ~25g',g:25},{l:'2 tbsp',g:50},{l:'100g',g:100}]},
  {id:'milk',n:'Whole Milk',e:'🥛',cat:'Dairy',p100:{c:61,p:3.2,cb:4.8,f:3.3},por:[{l:'Glass ~250ml',g:250},{l:'100ml',g:100}]},
  {id:'cheese',n:'Hard Cheese',e:'🧀',cat:'Dairy',p100:{c:402,p:25,cb:1.3,f:33},por:[{l:'1 slice ~25g',g:25},{l:'50g',g:50},{l:'100g',g:100}]},
  {id:'yogurt',n:'Greek Yogurt',e:'🥛',cat:'Dairy',p100:{c:97,p:9,cb:3.6,f:5},por:[{l:'Cup ~150g',g:150},{l:'Large ~250g',g:250}]},
  {id:'coca_cola',n:'Coca-Cola',e:'🥤',cat:'Drinks',p100:{c:42,p:0,cb:10.6,f:0},por:[{l:'Can 330ml',g:330},{l:'Bottle 500ml',g:500},{l:'Bottle 1L',g:1000}]},
  {id:'cola_zero',n:'Coca-Cola Zero',e:'🥤',cat:'Drinks',p100:{c:1,p:0,cb:0.1,f:0},por:[{l:'Can 330ml',g:330},{l:'Bottle 500ml',g:500}]},
  {id:'coffee',n:'Black Coffee',e:'☕',cat:'Drinks',p100:{c:2,p:0.3,cb:0,f:0},por:[{l:'Cup ~240ml',g:240},{l:'Espresso ~30ml',g:30}]},
  {id:'ice_golias',n:'Ice Cream Golias',e:'🍦',cat:'Sweets',p100:{c:220,p:3.5,cb:28,f:11},por:[{l:'1 portion ~100g',g:100},{l:'Small ~70g',g:70}]},
  {id:'ice_watermelon',n:'Watermelon Ice Cream',e:'🍉',cat:'Sweets',p100:{c:100,p:1,cb:20,f:2},por:[{l:'1 bar (220kcal) ~220g',g:220},{l:'Half bar',g:110}]},
  {id:'peanut_butter',n:'Peanut Butter',e:'🥜',cat:'Fats',p100:{c:588,p:25,cb:20,f:50},por:[{l:'1 tbsp ~16g',g:16},{l:'2 tbsp',g:32}]},
  {id:'olive_oil',n:'Olive Oil',e:'🫒',cat:'Fats',p100:{c:884,p:0,cb:0,f:100},por:[{l:'1 tbsp ~14g',g:14},{l:'1 tsp ~5g',g:5}]},
];

/* ============ LEVEL SYSTEM (100 levels) ============ */
const TIERS = ['Rookie','Novice','Amateur','Athlete','Veteran','Pro','Elite','Champion','Master','Legend'];
const XP_COSTS = [150,300,600,1200,2000,2500,3000,3500,4000,5000];
const XP_TH = (() => { const t=[0]; for(let i=0;i<99;i++) t.push(t[i]+XP_COSTS[Math.floor(i/10)]); return t; })();
function getLevel(xp){ let l=0; for(let i=0;i<100;i++){ if(xp>=XP_TH[i]) l=i; else break; } return Math.min(l,99); }
function levelInfo(xp){
  const l=getLevel(xp), tier=Math.floor(l/10);
  const prev=XP_TH[l], next=l<99?XP_TH[l+1]:XP_TH[99]+XP_COSTS[9];
  return {lvl:l+1, tier:TIERS[tier], prev, next, pct:l<99?((xp-prev)/(next-prev))*100:100};
}

/* ============ STATE ============ */
let APP = {
  profile:{name:'',goal:'build_muscle',level:'beginner',equipment:[],weight:0,height:0,age:0},
  settings:{weightUnit:'kg',restTimerOn:true,restDuration:90,apiKey:'',activityLevel:1.55},
  workouts:[], customWorkouts:[], history:[], prs:{},
  nutrition:{goals:{calories:2500,protein:170,carbs:300,fat:80},days:{}},
  xp:0, xpLog:[], streak:0, lastWorkoutDate:null
};

const $ = id => document.getElementById(id);
const ds = d => d.toISOString().split('T')[0];
const today = () => ds(new Date());
function esc(s){ return String(s??'').replace(/[<>&"']/g, c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'}[c])); }
function num(v,min,max){ const n=parseFloat(v); if(isNaN(n))return 0; return Math.min(Math.max(n,min??0),max??1e9); }
function save(){ try{ localStorage.setItem('fitstreak_v2', JSON.stringify(APP)); }catch(e){ toast('Storage full','err'); } }
function load(){ try{ const r=localStorage.getItem('fitstreak_v2'); return r?JSON.parse(r):null; }catch{ return null; } }
function daysDiff(a,b){ return Math.abs(Math.round((new Date(b)-new Date(a))/864e5)); }

let toastT;
function toast(m,t){ const el=$('toast'); el.textContent=m; el.className='show'+(t?' '+t:''); clearTimeout(toastT); toastT=setTimeout(()=>el.className='',2600); }
function openMo(id){ $(id).classList.add('on'); }
function closeMo(id){ $(id).classList.remove('on'); }
document.querySelectorAll('.mo').forEach(m=>m.addEventListener('click',e=>{ if(e.target===m) m.classList.remove('on'); }));

/* ============ NAVIGATION ============ */
let cur='home';
function go(s){
  if(s==='active' && !AW){ s='workouts'; }
  document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.ni').forEach(x=>x.classList.toggle('active', x.dataset.s===s));
  const el=$('screen-'+s); if(el) el.classList.add('active');
  cur=s;
  if(s==='home') renderHome();
  if(s==='workouts') renderWorkouts();
  if(s==='progress') renderProgress();
  if(s==='nutrition'){ nDate=today(); renderNutrition(); }
  if(s==='profile') renderProfile();
}

/* ============ ONBOARDING ============ */
let obStep=0; const OB_N=5;
let obSel={goal:null,level:null,equip:[]};
const OB_GOALS=[['build_muscle','💪','Build Muscle','Gain size and strength'],['lose_fat','🔥','Lose Fat','Burn calories, get lean'],['get_strong','🏋️','Get Stronger','Increase max lifts'],['stay_fit','⚡','Stay Fit','General health']];
const OB_LEVELS=[['beginner','🌱','Beginner','Under 1 year'],['intermediate','🏃','Intermediate','1–3 years'],['advanced','🦁','Advanced','3+ years']];
const OB_EQ=[['barbell','🏋️','Barbell'],['dumbbell','💪','Dumbbells'],['cable','🔗','Cables'],['machine','⚙️','Machines'],['bodyweight','🤸','Bodyweight'],['pullup_bar','🏗️','Pull-up Bar']];

function initOB(){
  $('ob-dots').innerHTML = Array.from({length:OB_N},(_,i)=>`<div class="dot${i===0?' on':''}"></div>`).join('');
  $('ob-goals').innerHTML = OB_GOALS.map(g=>`<div class="opt" data-v="${g[0]}"><div class="oi">${g[1]}</div><div><div class="ol">${g[2]}</div><div class="od">${g[3]}</div></div></div>`).join('');
  $('ob-levels').innerHTML = OB_LEVELS.map(g=>`<div class="opt" data-v="${g[0]}"><div class="oi">${g[1]}</div><div><div class="ol">${g[2]}</div><div class="od">${g[3]}</div></div></div>`).join('');
  $('ob-equip').innerHTML = OB_EQ.map(g=>`<div class="opt" data-v="${g[0]}"><div class="oi">${g[1]}</div><div class="ol">${g[2]}</div></div>`).join('');
  $('ob-goals').querySelectorAll('.opt').forEach(o=>o.onclick=()=>{ $('ob-goals').querySelectorAll('.opt').forEach(x=>x.classList.remove('sel')); o.classList.add('sel'); obSel.goal=o.dataset.v; obValid(); });
  $('ob-levels').querySelectorAll('.opt').forEach(o=>o.onclick=()=>{ $('ob-levels').querySelectorAll('.opt').forEach(x=>x.classList.remove('sel')); o.classList.add('sel'); obSel.level=o.dataset.v; obValid(); });
  $('ob-equip').querySelectorAll('.opt').forEach(o=>o.onclick=()=>{ o.classList.toggle('sel'); const v=o.dataset.v; obSel.equip=obSel.equip.includes(v)?obSel.equip.filter(x=>x!==v):[...obSel.equip,v]; obValid(); });
  $('ob-name').addEventListener('input',obValid);
  $('ob-next').onclick=obNext;
  $('ob').classList.add('on');
  obValid();
}
function obValid(){
  let ok=true;
  if(obStep===0) ok=$('ob-name').value.trim().length>=2;
  if(obStep===1) ok=!!obSel.goal;
  if(obStep===2) ok=!!obSel.level;
  if(obStep===3) ok=obSel.equip.length>0;
  $('ob-next').disabled=!ok;
}
function obNext(){
  if(obStep<OB_N-1){
    $('obs'+obStep).style.display='none';
    obStep++;
    $('obs'+obStep).style.display='';
    document.querySelectorAll('#ob-dots .dot').forEach((d,i)=>d.classList.toggle('on',i<=obStep));
    $('ob-next').textContent = obStep===OB_N-1 ? "Let's Go! ⚡" : 'Continue';
    obValid();
  } else finishOB();
}
function finishOB(){
  APP.profile={
    name:esc($('ob-name').value.trim().slice(0,30))||'Athlete',
    goal:obSel.goal||'build_muscle', level:obSel.level||'beginner',
    equipment:[...obSel.equip],
    weight:num($('ob-w').value,0,300), height:num($('ob-h').value,0,250), age:num($('ob-a').value,0,100)
  };
  APP.workouts=TEMPLATES.map(t=>({...t}));
  calcGoals();
  save();
  $('ob').classList.remove('on');
  $('app').classList.add('on');
  initApp();
}

/* ============ CALORIE GOALS ============ */
function calcGoals(){
  const {weight,height,age,goal}=APP.profile;
  if(!weight||!height) return;
  const bmr=10*weight+6.25*height-5*(age||25)+5;
  const tdee=Math.round(bmr*(parseFloat(APP.settings.activityLevel)||1.55));
  let cal, pm;
  if(goal==='lose_fat'){cal=Math.round(tdee*.8);pm=2.2;}
  else if(goal==='build_muscle'){cal=Math.round(tdee*1.1);pm=2.0;}
  else if(goal==='get_strong'){cal=Math.round(tdee*1.08);pm=2.0;}
  else{cal=tdee;pm=1.8;}
  APP.nutrition.goals={calories:cal, protein:Math.round(weight*pm), carbs:Math.round(cal*.45/4), fat:Math.round(cal*.25/9)};
}

/* ============ HOME ============ */
function renderHome(){
  const h=new Date().getHours();
  $('h-greet').textContent = h<12?'Good morning':h<17?'Good afternoon':'Good evening';
  $('h-name').textContent = APP.profile.name||'Athlete';
  $('h-streak').textContent = APP.streak;
  $('h-wk').textContent = APP.history.length;
  $('h-xp').textContent = APP.xp.toLocaleString();
  const li=levelInfo(APP.xp);
  $('h-lvl').textContent = `LVL ${li.lvl} — ${li.tier}`;
  $('h-xpto').textContent = `${APP.xp.toLocaleString()} / ${li.next.toLocaleString()} XP`;
  $('h-bar').style.width = Math.min(li.pct,100)+'%';

  const t=$('h-today'); t.innerHTML='';
  const w=APP.workouts[0];
  if(w) t.appendChild(wktCard(w));
  else t.innerHTML='<div class="empty"><div class="e">📋</div><div class="t">No workouts yet</div></div>';

  const q=$('h-quick'); q.innerHTML='';
  [['🏋️','Start Workout',()=>go('workouts')],['📊','Progress',()=>go('progress')],['🥗','Log Meal',()=>{go('nutrition');setTimeout(openMeal,250);}],['🤖','AI Coach',()=>go('ai')]].forEach(([e,l,fn])=>{
    const d=document.createElement('div'); d.className='qitem'; d.onclick=fn;
    d.innerHTML=`<div class="qi">${e}</div><div class="ql">${l}</div>`;
    q.appendChild(d);
  });
}

/* ============ WORKOUTS ============ */
let wFilter='All';
function renderWorkouts(){
  const cats=['All','Push','Pull','Legs','Chest','Back','Shoulders','Arms','Core','Upper','Full Body','Bodyweight','Strength','Cardio','Custom'];
  const f=$('w-filters'); f.innerHTML='';
  cats.forEach(c=>{
    const ch=document.createElement('div'); ch.className='chip'+(c===wFilter?' active':''); ch.textContent=c;
    ch.onclick=()=>{wFilter=c;renderWorkouts();};
    f.appendChild(ch);
  });
  const list=$('w-list'); list.innerHTML='';
  let all=[...APP.workouts,...(APP.customWorkouts||[])];
  if(wFilter==='Custom') all=all.filter(w=>w.custom);
  else if(wFilter!=='All') all=all.filter(w=>(w.tags||[]).some(t=>t.toLowerCase().includes(wFilter.toLowerCase())));
  if(!all.length){ list.innerHTML='<div class="empty"><div class="e">🏋️</div><div class="t">No workouts found</div></div>'; return; }
  all.forEach(w=>list.appendChild(wktCard(w)));
}
function wktCard(w){
  const c=document.createElement('div'); c.className='card';
  const tags=(w.tags||[]).slice(0,3).map(t=>`<span class="badge">${esc(t)}</span>`).join(' ');
  c.innerHTML=`<div class="card-t">${w.e||'🏋️'} ${esc(w.name)}</div>
    <div class="card-s">${esc(w.d||'')}</div>
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:10px;flex-wrap:wrap">
      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">${tags}<span style="font-family:var(--fm);font-size:10px;color:var(--muted)">${(w.ex||[]).length} exercises</span></div>
      <div style="display:flex;gap:7px;flex-shrink:0">
        <button class="btn-sm ed">✏️ Edit</button>
        <button class="btn-sm acc st">▶ Start</button>
      </div>
    </div>`;
  c.querySelector('.ed').onclick=e=>{e.stopPropagation();openEdit(w);};
  c.querySelector('.st').onclick=e=>{e.stopPropagation();startWorkout(w);};
  return c;
}

/* ---- create / edit workout ---- */
function openNewWorkout(){
  $('nw-n').value='';
  const m=$('nw-m'); m.innerHTML='';
  ['Chest','Back','Shoulders','Arms','Legs','Core','Cardio'].forEach(x=>{
    const ch=document.createElement('div'); ch.className='chip'; ch.textContent=x;
    ch.onclick=()=>ch.classList.toggle('active');
    m.appendChild(ch);
  });
  openMo('m-new');
}
function createWorkout(){
  const n=esc($('nw-n').value.trim().slice(0,40));
  if(!n){toast('Enter a name','err');return;}
  const tags=[...$('nw-m').querySelectorAll('.chip.active')].map(c=>c.textContent);
  const w={id:'c_'+Date.now(),name:n,tags,ex:[],sets:3,e:'⚙️',d:tags.join(', ')||'Custom workout',custom:true};
  APP.customWorkouts=APP.customWorkouts||[];
  APP.customWorkouts.push(w);
  save(); closeMo('m-new'); renderWorkouts(); openEdit(w);
}
let editW=null;
function openEdit(w){
  editW=w;
  $('ew-t').textContent=(w.e||'🏋️')+' '+w.name;
  renderEditList();
  openMo('m-edit');
}
function renderEditList(){
  const l=$('ew-list'); l.innerHTML='';
  const exs=editW.ex||[];
  if(!exs.length){ l.innerHTML='<div class="empty" style="padding:18px"><div class="t" style="font-size:15px">No exercises — tap below to add</div></div>'; return; }
  exs.forEach((id,i)=>{
    const ex=EXERCISES.find(e=>e.id===id)||{name:id,muscle:'',e:'💪'};
    const r=document.createElement('div');
    r.style.cssText='display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border)';
    r.innerHTML=`<div style="font-size:21px">${ex.e}</div><div style="flex:1"><div style="font-family:var(--fd);font-size:15px;font-weight:700">${esc(ex.name)}</div><div style="font-family:var(--fm);font-size:9px;color:var(--muted);text-transform:uppercase">${esc(ex.muscle)}</div></div><button class="btn-sm dng">✕</button>`;
    r.querySelector('button').onclick=()=>{ editW.ex.splice(i,1); saveEditW(); renderEditList(); };
    l.appendChild(r);
  });
}
function saveEditW(){
  if(editW.custom){ const i=(APP.customWorkouts||[]).findIndex(w=>w.id===editW.id); if(i!==-1)APP.customWorkouts[i]=editW; }
  else{ const i=APP.workouts.findIndex(w=>w.id===editW.id); if(i!==-1)APP.workouts[i]=editW; }
  save(); renderWorkouts();
}
function addExToEdit(){
  pickExercise(id=>{
    if((editW.ex||[]).includes(id)){toast('Already added','err');return;}
    editW.ex=editW.ex||[]; editW.ex.push(id);
    saveEditW(); closeMo('m-ex'); renderEditList(); toast('Added!','ok');
  });
}

/* ============ EXERCISE PICKER ============ */
let exCb=null, exFilter='All';
function pickExercise(cb){
  exCb=cb; exFilter='All'; $('ex-q').value='';
  const f=$('ex-f'); f.innerHTML='';
  ['All','Chest','Back','Shoulders','Arms','Legs','Core','Cardio'].forEach(m=>{
    const ch=document.createElement('div'); ch.className='chip'+(m==='All'?' active':''); ch.textContent=m;
    ch.onclick=()=>{ exFilter=m; f.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active',c.textContent===m)); renderExPicker(); };
    f.appendChild(ch);
  });
  renderExPicker();
  openMo('m-ex');
}
function renderExPicker(){
  const q=($('ex-q').value||'').toLowerCase();
  const l=$('ex-list'); l.innerHTML='';
  let fl=EXERCISES;
  if(exFilter!=='All') fl=fl.filter(e=>e.muscle===exFilter);
  if(q) fl=fl.filter(e=>e.name.toLowerCase().includes(q));
  if(!fl.length){ l.innerHTML='<div class="empty"><div class="t" style="font-size:15px">Nothing found</div></div>'; return; }
  fl.forEach(ex=>{
    const d=document.createElement('div'); d.className='exl';
    d.innerHTML=`<div class="ei">${ex.e}</div><div><div class="en">${esc(ex.name)}</div><div class="em">${esc(ex.muscle)} · ${ex.type}</div></div>`;
    d.onclick=()=>exCb&&exCb(ex.id);
    l.appendChild(d);
  });
}

/* ============ ACTIVE WORKOUT ============ */
let AW=null, awStart=null, awTimer=null;
function saveAW(){ if(!AW)return; try{ localStorage.setItem('fitstreak_active', JSON.stringify({w:AW,s:awStart})); }catch{} }
function clearAW(){ try{ localStorage.removeItem('fitstreak_active'); }catch{} }
function loadAW(){
  try{
    const r=localStorage.getItem('fitstreak_active'); if(!r)return false;
    const d=JSON.parse(r); if(!d||!d.w)return false;
    AW=d.w; awStart=d.s||Date.now();
    $('a-name').textContent=(AW.e||'')+' '+AW.name;
    renderActive(); go('active');
    awTimer=setInterval(tickTimer,1000);
    toast('Workout resumed!','ok');
    return true;
  }catch{ clearAW(); return false; }
}
function startWorkout(w){
  AW={id:w.id,name:w.name,e:w.e,ex:(w.ex||[]).map(id=>{
    const x=EXERCISES.find(e=>e.id===id)||{id,name:id,muscle:'',type:'strength',e:'💪'};
    const cardio=x.type==='cardio';
    return {id:x.id,name:x.name,muscle:x.muscle,e:x.e,type:x.type,
      sets:Array.from({length:cardio?1:(w.sets||3)},()=>cardio?{dur:'',dist:'',done:false}:{w:'',r:'',done:false})};
  })};
  awStart=Date.now();
  $('a-name').textContent=(w.e||'')+' '+w.name;
  saveAW(); renderActive(); go('active');
  clearInterval(awTimer); awTimer=setInterval(tickTimer,1000);
}
function tickTimer(){
  if(!awStart)return;
  const s=Math.floor((Date.now()-awStart)/1000);
  $('a-timer').textContent=String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');
}
function prevSet(exId,i){
  for(let h=APP.history.length-1;h>=0;h--){
    const ex=(APP.history[h].exercises||[]).find(e=>e.id===exId);
    if(ex&&ex.sets&&ex.sets[i]&&(ex.sets[i].w||ex.sets[i].dur)) return ex.sets[i];
  }
  return null;
}
function renderActive(){
  const l=$('a-list'); l.innerHTML='';
  if(!AW)return;
  AW.ex.forEach((ex,xi)=>{
    const cardio=ex.type==='cardio';
    const sec=document.createElement('div'); sec.className='exsec';
    const head=document.createElement('div'); head.className='exhead';
    head.innerHTML=`<div><div class="xn">${ex.e} ${esc(ex.name)}</div><div class="xm">${esc(ex.muscle)}</div></div>`;
    const sw=document.createElement('button'); sw.className='btn-sm'; sw.textContent='⇄';
    sw.onclick=()=>pickExercise(id=>{
      const x=EXERCISES.find(e=>e.id===id); if(!x)return;
      AW.ex[xi]={...AW.ex[xi], id:x.id, name:x.name, muscle:x.muscle, e:x.e, type:x.type};
      saveAW(); closeMo('m-ex'); renderActive(); toast('Switched!','ok');
    });
    const rm=document.createElement('button'); rm.className='btn-sm dng'; rm.textContent='✕';
    rm.onclick=()=>{ AW.ex.splice(xi,1); saveAW(); renderActive(); };
    head.appendChild(sw); head.appendChild(rm);
    sec.appendChild(head);

    const hd=document.createElement('div'); hd.className='srow hd '+(cardio?'crd':'str');
    hd.innerHTML=cardio?'<div>#</div><div>Duration</div><div>Distance km</div><div>✓</div><div></div>'
                       :'<div>#</div><div>Prev</div><div>Weight</div><div>Reps</div><div>✓</div><div></div>';
    sec.appendChild(hd);

    ex.sets.forEach((st,si)=>{
      const row=document.createElement('div'); row.className='srow '+(cardio?'crd':'str');
      if(st.done)row.style.opacity='.5';
      const n=document.createElement('div'); n.className='snum'; n.textContent=si+1;
      row.appendChild(n);
      if(cardio){
        const di=mkIn(st.dur,'30:00','text',v=>{st.dur=v;saveAW();});
        const ds2=mkIn(st.dist,'km','number',v=>{st.dist=v;saveAW();});
        row.appendChild(di); row.appendChild(ds2);
      }else{
        const pv=prevSet(ex.id,si);
        const p=document.createElement('div'); p.className='sprev'; p.textContent=pv?`${pv.w}×${pv.r}`:'—';
        const wi=mkIn(st.w, pv?pv.w:'0','number',v=>{st.w=num(v,0,9999);saveAW();});
        const ri=mkIn(st.r, pv?pv.r:'10','number',v=>{st.r=num(v,0,999);saveAW();});
        row.appendChild(p); row.appendChild(wi); row.appendChild(ri);
      }
      const chk=document.createElement('div'); chk.className='schk'+(st.done?' done':''); chk.textContent=st.done?'✓':'';
      chk.onclick=()=>{ st.done=!st.done; chk.classList.toggle('done',st.done); chk.textContent=st.done?'✓':''; row.style.opacity=st.done?'.5':'1'; saveAW(); if(st.done&&APP.settings.restTimerOn)startRest(APP.settings.restDuration||90); };
      const del=document.createElement('div'); del.className='srm'; del.textContent='−';
      del.onclick=()=>{ ex.sets.splice(si,1); saveAW(); renderActive(); };
      row.appendChild(chk); row.appendChild(del);
      sec.appendChild(row);
    });

    const add=document.createElement('button'); add.className='addset'; add.textContent=cardio?'+ Add Session':'+ Add Set';
    add.onclick=()=>{ ex.sets.push(cardio?{dur:'',dist:'',done:false}:{w:'',r:'',done:false}); saveAW(); renderActive(); };
    sec.appendChild(add);
    l.appendChild(sec);
  });
}
function mkIn(val,ph,type,cb){
  const i=document.createElement('input'); i.className='sin'; i.type=type; i.value=val||''; i.placeholder=ph;
  if(type==='number')i.inputMode='decimal';
  i.oninput=()=>cb(i.value);
  return i;
}
function addExToActive(){
  pickExercise(id=>{
    const x=EXERCISES.find(e=>e.id===id); if(!x||!AW)return;
    const cardio=x.type==='cardio';
    AW.ex.push({id:x.id,name:x.name,muscle:x.muscle,e:x.e,type:x.type,
      sets:cardio?[{dur:'',dist:'',done:false}]:[{w:'',r:'',done:false},{w:'',r:'',done:false},{w:'',r:'',done:false}]});
    saveAW(); closeMo('m-ex'); renderActive();
  });
}
function cancelWorkout(){
  if(!confirm('Cancel workout? Progress will be lost.'))return;
  clearInterval(awTimer); stopRest(); clearAW(); AW=null; awStart=null; go('workouts');
}
function parseMins(d){
  if(!d)return 0;
  if(String(d).includes(':')){ const p=String(d).split(':'); return (parseInt(p[0])||0)+(parseInt(p[1])||0)/60; }
  return parseFloat(d)||0;
}
function finishWorkout(){
  if(!AW)return;
  clearInterval(awTimer); stopRest();
  const dur=Math.floor((Date.now()-awStart)/1000);
  let vol=0, sets=0, km=0, mins=0;
  AW.ex.forEach(ex=>{
    ex.sets.filter(s=>s.done).forEach(s=>{
      if(ex.type==='cardio'){ km+=parseFloat(s.dist)||0; mins+=parseMins(s.dur); }
      else{ vol+=(parseFloat(s.w)||0)*(parseFloat(s.r)||0); sets++; }
    });
  });
  const xp=Math.round(sets*10+vol*.05+mins*5+km*10);
  const rec={id:Date.now(),name:AW.name,e:AW.e,date:today(),duration:dur,volume:Math.round(vol),
    cardioKm:Math.round(km*10)/10, cardioMin:Math.round(mins*10)/10,
    exercises:AW.ex.map(ex=>({id:ex.id,name:ex.name,type:ex.type,
      sets:ex.sets.filter(s=>s.done).map(s=>ex.type==='cardio'?{dur:s.dur,dist:parseFloat(s.dist)||0}:{w:parseFloat(s.w)||0,r:parseFloat(s.r)||0})})),
    xpGained:xp};
  APP.history.push(rec);
  updatePRsFrom(rec);
  const t=today();
  if(APP.lastWorkoutDate!==t){
    if(APP.lastWorkoutDate&&daysDiff(APP.lastWorkoutDate,t)===1)APP.streak++;
    else APP.streak=1;
    APP.lastWorkoutDate=t;
  }
  APP.xp+=xp;
  APP.xpLog=APP.xpLog||[];
  APP.xpLog.push({date:t,amount:xp,reason:rec.name,e:rec.e||'🏋️',total:APP.xp});
  if(APP.xpLog.length>300)APP.xpLog=APP.xpLog.slice(-300);
  save();
  showDone(rec,dur);
  clearAW(); AW=null; awStart=null;
}
function updatePRsFrom(rec){
  rec.exercises.forEach(ex=>{
    ex.sets.forEach(s=>{
      if(ex.type==='cardio'){
        const m=parseMins(s.dur), k=s.dist||0;
        if(!APP.prs[ex.id])APP.prs[ex.id]={name:ex.name,type:'cardio',bestKm:0,bestMins:0,date:rec.date};
        if(k>APP.prs[ex.id].bestKm){APP.prs[ex.id].bestKm=k;APP.prs[ex.id].date=rec.date;}
        if(m>APP.prs[ex.id].bestMins)APP.prs[ex.id].bestMins=m;
      }else if(s.w>0&&s.r>0){
        const e1=s.w*(1+s.r/30);
        if(!APP.prs[ex.id]||e1>APP.prs[ex.id].e1rm)
          APP.prs[ex.id]={name:ex.name,type:'strength',weight:s.w,reps:s.r,e1rm:e1,date:rec.date};
      }
    });
  });
}
function showDone(rec,dur){
  $('done-s').textContent='+'+rec.xpGained+' XP earned! Keep pushing.';
  const g=$('done-g'); g.innerHTML='';
  const hasC=rec.cardioKm>0||rec.cardioMin>0, hasS=rec.volume>0;
  const stats=[[String(Math.floor(dur/60))+':'+String(dur%60).padStart(2,'0'),'Duration'],
    hasS?[rec.volume.toLocaleString(),'Volume kg']:[rec.cardioKm+' km','Distance'],
    hasC&&!hasS?[Math.round(rec.cardioMin)+' min','Cardio']:[rec.exercises.reduce((n,e)=>n+e.sets.length,0),'Sets']];
  stats.forEach(([v,l])=>{ g.innerHTML+=`<div class="dc"><div class="dv">${v}</div><div class="dl">${l}</div></div>`; });
  $('done').classList.add('on');
}
function closeDone(){ $('done').classList.remove('on'); go('home'); }

/* ============ REST TIMER ============ */
let restI=null, restLeft=0;
function startRest(d){
  stopRest(); restLeft=d;
  $('rest-t').textContent=restLeft;
  $('rest').classList.add('on');
  restI=setInterval(()=>{
    restLeft--;
    $('rest-t').textContent=restLeft;
    if(restLeft<=0){ restSkip(); if(navigator.vibrate)navigator.vibrate([200,100,200]); }
  },1000);
}
function restSkip(){ stopRest(); $('rest').classList.remove('on'); }
function stopRest(){ clearInterval(restI); restI=null; }
function restAdd(d){ restLeft=Math.max(5,restLeft+d); $('rest-t').textContent=restLeft; }

/* ============ PROGRESS ============ */
function renderProgress(){
  const tv=APP.history.reduce((a,h)=>a+h.volume,0);
  const tt=APP.history.reduce((a,h)=>a+h.duration,0);
  const tk=APP.history.reduce((a,h)=>a+(h.cardioKm||0),0);
  const s=$('p-stats'); s.innerHTML='';
  [[APP.history.length,'Workouts'],[APP.streak+'🔥','Streak'],[Math.round(tt/3600)+'h','Total Time'],
   [Math.round(tv/1000)+'t','Strength Vol'],[Math.round(tk*10)/10+'km','Cardio Dist'],[APP.xp.toLocaleString(),'Total XP']]
   .forEach(([v,k])=>{ s.innerHTML+=`<div class="scard"><div class="v">${v}</div><div class="k">${k}</div></div>`; });
  drawBars('c-vol', last7().map(d=>APP.history.filter(h=>h.date===d).reduce((a,h)=>a+h.volume,0)), last7().map(d=>d.slice(5)));
  const wk=[],wd=[];
  for(let i=3;i>=0;i--){
    const st=new Date();st.setDate(st.getDate()-i*7-6);
    const en=new Date();en.setDate(en.getDate()-i*7);
    wd.push(APP.history.filter(h=>h.date>=ds(st)&&h.date<=ds(en)).length);
    wk.push('W'+(4-i));
  }
  drawBars('c-freq',wd,wk);
  renderPRs(); renderHist(1); renderXPLog(1);
}
function last7(){ const a=[]; for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);a.push(ds(d));} return a; }
function drawBars(id,data,labels){
  const c=$(id); if(!c)return;
  const dpr=window.devicePixelRatio||1;
  const w=c.parentElement.clientWidth-28, h=150;
  c.width=w*dpr; c.height=h*dpr; c.style.width=w+'px'; c.style.height=h+'px';
  const x=c.getContext('2d'); x.scale(dpr,dpr); x.clearRect(0,0,w,h);
  const max=Math.max(...data,1), gap=w/data.length, bw=gap*.55, ch=h-24;
  x.strokeStyle='rgba(42,42,64,.6)';
  for(let i=0;i<=4;i++){ const y=ch-ch*i/4; x.beginPath();x.moveTo(0,y);x.lineTo(w,y);x.stroke(); }
  data.forEach((v,i)=>{
    const bx=i*gap+(gap-bw)/2, bh=(v/max)*ch, by=ch-bh;
    const g=x.createLinearGradient(0,by,0,ch);
    g.addColorStop(0,'#C8FF00'); g.addColorStop(1,'rgba(200,255,0,.25)');
    x.fillStyle=g; x.fillRect(bx,by,bw,bh);
    x.fillStyle='rgba(112,112,160,.9)'; x.font='9px "DM Mono"'; x.textAlign='center';
    x.fillText(labels[i]||'',bx+bw/2,h-6);
  });
}
function renderPRs(){
  const el=$('p-prs'); el.innerHTML='';
  const all=Object.values(APP.prs);
  if(!all.length){ el.innerHTML='<div class="empty" style="padding:18px"><div class="t" style="font-size:15px">No PRs yet</div></div>'; return; }
  const str=all.filter(p=>p.type!=='cardio').sort((a,b)=>b.e1rm-a.e1rm).slice(0,6);
  const crd=all.filter(p=>p.type==='cardio');
  [...str,...crd].forEach((p,i)=>{
    const r=document.createElement('div'); r.className='pritem';
    if(p.type==='cardio'){
      r.innerHTML=`<div style="font-size:15px">🏃</div><div class="pn">${esc(p.name)}</div><div class="pv">${p.bestKm?p.bestKm+'<span class="pu">km</span>':''}${p.bestMins?' <span class="pu">'+Math.round(p.bestMins)+'min</span>':''}</div>`;
    }else{
      r.innerHTML=`<div style="font-family:var(--fm);font-size:10px;color:var(--dim);width:20px">#${i+1}</div><div class="pn">${esc(p.name)}</div><div class="pv">${p.weight}<span class="pu">kg × ${p.reps}</span></div>`;
    }
    el.appendChild(r);
  });
}
let histPage=1;
function renderHist(page){
  histPage=page||1;
  const el=$('p-hist'); if(histPage===1)el.innerHTML='';
  const old=$('hist-more'); if(old)old.remove();
  const sorted=[...APP.history].sort((a,b)=>b.id-a.id);
  if(!sorted.length){ el.innerHTML='<div class="empty"><div class="e">📅</div><div class="t">No history yet</div></div>'; return; }
  sorted.slice((histPage-1)*20,histPage*20).forEach(h=>{
    const c=document.createElement('div'); c.className='card';
    const parts=[h.date,Math.floor(h.duration/60)+'min'];
    if(h.volume>0)parts.push(h.volume+'kg vol');
    if(h.cardioKm>0)parts.push(h.cardioKm+'km');
    if(h.cardioMin>0&&!h.cardioKm)parts.push(Math.round(h.cardioMin)+'min cardio');
    c.innerHTML=`<div style="display:flex;justify-content:space-between;gap:8px;align-items:flex-start">
      <div style="flex:1"><div class="card-t">${h.e||'🏋️'} ${esc(h.name)}</div>
      <div class="card-s">${parts.join(' · ')}</div>
      <span class="badge" style="margin-top:7px;display:inline-block">+${h.xpGained||0} XP</span></div>
      <button class="btn-sm dng">🗑️</button></div>`;
    c.querySelector('button').onclick=()=>delHist(h.id);
    el.appendChild(c);
  });
  const shown=Math.min(histPage*20,sorted.length);
  if(shown<sorted.length){
    const b=document.createElement('button'); b.id='hist-more'; b.className='dashbtn'; b.style.marginBottom='10px';
    b.textContent=`Load more (${sorted.length-shown} remaining)`;
    b.onclick=()=>renderHist(histPage+1);
    el.appendChild(b);
  }
}
function delHist(id){
  if(!confirm('Delete this workout? XP will be refunded.'))return;
  const i=APP.history.findIndex(h=>h.id===id); if(i===-1)return;
  const h=APP.history[i];
  APP.xp=Math.max(0,APP.xp-(h.xpGained||0));
  if(APP.xpLog){
    const li=APP.xpLog.findIndex(l=>l.date===h.date&&l.amount===h.xpGained&&l.reason===h.name);
    if(li!==-1)APP.xpLog.splice(li,1);
  }
  APP.history.splice(i,1);
  APP.prs={};
  APP.history.forEach(r=>updatePRsFrom(r));
  if(APP.history.length){ APP.lastWorkoutDate=APP.history.reduce((m,x)=>x.date>m?x.date:m,''); }
  else{ APP.lastWorkoutDate=null; APP.streak=0; }
  save(); renderProgress(); toast('Deleted & XP refunded','ok');
}
let xpPage=1;
function renderXPLog(page){
  xpPage=page||1;
  const el=$('p-xplog'); if(xpPage===1)el.innerHTML='';
  const old=$('xp-more'); if(old)old.remove();
  const log=[...(APP.xpLog||[])].reverse();
  if(!log.length){ el.innerHTML='<div class="empty"><div class="e">⚡</div><div class="t">No XP yet</div></div>'; return; }
  const items=log.slice(0,xpPage*30);
  const groups={};
  items.forEach(x=>{ (groups[x.date]=groups[x.date]||[]).push(x); });
  el.innerHTML='';
  const t=today(), y=ds(new Date(Date.now()-864e5));
  Object.entries(groups).forEach(([date,es])=>{
    const lb=document.createElement('div'); lb.className='datelbl';
    lb.textContent=date===t?'Today':date===y?'Yesterday':date;
    el.appendChild(lb);
    es.forEach(x=>{
      const r=document.createElement('div'); r.className='xrow';
      r.innerHTML=`<div class="xi">${x.e||'🏋️'}</div><div style="flex:1;min-width:0"><div class="xn">${esc(x.reason||'Workout')}</div><div class="xs">Total: ${(x.total||0).toLocaleString()} XP</div></div><div class="xv">+${x.amount}</div>`;
      el.appendChild(r);
    });
    const dt=document.createElement('div'); dt.className='daytotal';
    dt.textContent='Day total: +'+es.reduce((a,x)=>a+x.amount,0)+' XP';
    el.appendChild(dt);
  });
  if(items.length<log.length){
    const b=document.createElement('button'); b.id='xp-more'; b.className='dashbtn';
    b.textContent=`Load more (${log.length-items.length} remaining)`;
    b.onclick=()=>renderXPLog(xpPage+1);
    el.appendChild(b);
  }
}

/* ============ NUTRITION ============ */
let nDate=today();
function shiftDay(d){
  const dt=new Date(nDate); dt.setDate(dt.getDate()+d);
  const s=ds(dt);
  if(s>today())return;
  nDate=s; renderNutrition();
}
function trimDays(){ const k=Object.keys(APP.nutrition.days).sort(); while(k.length>30)delete APP.nutrition.days[k.shift()]; }
function renderNutrition(){
  const isT=nDate===today();
  $('n-date').textContent=isT?'Today':nDate;
  $('n-title').textContent=isT?"Today's Meals":nDate+' Meals';
  $('n-next').style.opacity=isT?'.3':'1';
  $('n-log').style.display=(nDate<today())?'none':'';
  const meals=APP.nutrition.days[nDate]||[];
  const tot=meals.reduce((a,m)=>({c:a.c+(m.calories||0),p:a.p+(m.protein||0),cb:a.cb+(m.carbs||0),f:a.f+(m.fat||0)}),{c:0,p:0,cb:0,f:0});
  const g=APP.nutrition.goals;
  const pct=Math.min(tot.c/g.calories*100,100);
  const R=46, C=2*Math.PI*R;
  $('n-ring').innerHTML=`
    <div class="rw"><svg width="110" height="110" viewBox="0 0 110 110">
      <circle cx="55" cy="55" r="${R}" fill="none" stroke="var(--surface3)" stroke-width="9"/>
      <circle cx="55" cy="55" r="${R}" fill="none" stroke="var(--accent)" stroke-width="9" stroke-linecap="round"
        stroke-dasharray="${C}" stroke-dashoffset="${C*(1-pct/100)}" transform="rotate(-90 55 55)"/>
    </svg><div class="rcen"><div class="rcal">${Math.round(tot.c)}</div><div class="rlbl">of ${g.calories} kcal</div></div></div>
    <div class="mbars">
      ${[['Protein',tot.p,g.protein,'p'],['Carbs',tot.cb,g.carbs,'c'],['Fat',tot.f,g.fat,'f']].map(([n,v,gl,cl])=>`
        <div class="mb"><div class="mi"><span class="n">${n}</span><span class="v">${Math.round(v)}g <span style="color:var(--dim)">/ ${gl}g</span></span></div>
        <div class="mt"><div class="mf ${cl}" style="width:${Math.min(v/gl*100,100)}%"></div></div></div>`).join('')}
    </div>`;
  const ml=$('n-meals'); ml.innerHTML='';
  if(!meals.length){ ml.innerHTML='<div class="empty" style="padding:18px"><div class="e">🥗</div><div class="t" style="font-size:15px">No meals logged</div></div>'; }
  const icons=['🍳','🥙','🍱','🥗','🍎','🍫','🥤','🍗'];
  meals.forEach((m,i)=>{
    const d=document.createElement('div'); d.className='meal';
    d.innerHTML=`<div class="me">${icons[i%icons.length]}</div><div class="mn"><div class="n">${esc(m.name)}</div><div class="m">P:${m.protein}g · C:${m.carbs}g · F:${m.fat}g</div></div><div class="mc">${m.calories}</div><button class="btn-sm dng">✕</button>`;
    d.querySelector('button').onclick=()=>{ (APP.nutrition.days[nDate]||[]).splice(i,1); save(); renderNutrition(); };
    ml.appendChild(d);
  });
}
const porSel={};
function openMeal(){
  Object.keys(porSel).forEach(k=>delete porSel[k]);
  $('food-q').value=''; $('mm-n').value=''; $('mm-c').value=''; $('mm-p').value=''; $('mm-cb').value=''; $('mm-f').value='';
  mealTab('s'); renderFoods(); openMo('m-meal');
}
function mealTab(t){
  $('mt-s').classList.toggle('active',t==='s');
  $('mt-m').classList.toggle('active',t==='m');
  $('mtab-s').style.display=t==='s'?'':'none';
  $('mtab-m').style.display=t==='m'?'':'none';
}
function renderFoods(){
  const q=($('food-q').value||'').toLowerCase();
  const l=$('food-list'); l.innerHTML='';
  const fl=q?FOOD_DB.filter(f=>f.n.toLowerCase().includes(q)||f.cat.toLowerCase().includes(q)):FOOD_DB;
  if(!fl.length){ l.innerHTML='<div class="empty" style="padding:16px"><div class="t" style="font-size:14px">Not found — use Manual Entry</div></div>'; return; }
  const groups={};
  fl.forEach(f=>{ (groups[f.cat]=groups[f.cat]||[]).push(f); });
  Object.entries(groups).forEach(([cat,foods])=>{
    const cl=document.createElement('div'); cl.className='datelbl'; cl.textContent=cat;
    l.appendChild(cl);
    foods.forEach(f=>{
      if(porSel[f.id]===undefined)porSel[f.id]=0;
      const card=document.createElement('div'); card.className='food';
      const mac=document.createElement('div'); mac.className='fm2';
      const upd=()=>{
        const m=f.por[porSel[f.id]].g/100;
        mac.textContent=`${Math.round(f.p100.c*m)} kcal · P:${Math.round(f.p100.p*m*10)/10}g · C:${Math.round(f.p100.cb*m*10)/10}g · F:${Math.round(f.p100.f*m*10)/10}g`;
      };
      card.innerHTML=`<div class="fn">${f.e} ${esc(f.n)}</div>`;
      card.appendChild(mac);
      const pr=document.createElement('div'); pr.className='fp';
      f.por.forEach((p,pi)=>{
        const ch=document.createElement('div'); ch.className='pch'+(pi===porSel[f.id]?' active':''); ch.textContent=p.l;
        ch.onclick=()=>{ porSel[f.id]=pi; pr.querySelectorAll('.pch').forEach((c,ci)=>c.classList.toggle('active',ci===pi)); upd(); };
        pr.appendChild(ch);
      });
      card.appendChild(pr);
      const b=document.createElement('button'); b.className='btn'; b.style.cssText='padding:9px;font-size:13px'; b.textContent='+ Log This';
      b.onclick=()=>{
        const p=f.por[porSel[f.id]], m=p.g/100;
        (APP.nutrition.days[today()]=APP.nutrition.days[today()]||[]).push({
          name:f.n+' ('+p.l+')', calories:Math.round(f.p100.c*m),
          protein:Math.round(f.p100.p*m*10)/10, carbs:Math.round(f.p100.cb*m*10)/10, fat:Math.round(f.p100.f*m*10)/10});
        trimDays(); save(); closeMo('m-meal'); nDate=today(); renderNutrition(); toast(f.n+' logged!','ok');
      };
      card.appendChild(b);
      upd();
      l.appendChild(card);
    });
  });
}
function logManual(){
  const n=esc($('mm-n').value.trim().slice(0,60));
  if(!n){toast('Enter a name','err');return;}
  (APP.nutrition.days[today()]=APP.nutrition.days[today()]||[]).push({
    name:n, calories:Math.max(0,parseFloat($('mm-c').value)||0),
    protein:Math.max(0,parseFloat($('mm-p').value)||0),
    carbs:Math.max(0,parseFloat($('mm-cb').value)||0),
    fat:Math.max(0,parseFloat($('mm-f').value)||0)});
  trimDays(); save(); closeMo('m-meal'); nDate=today(); renderNutrition(); toast('Logged!','ok');
}

/* ============ AI COACH ============ */
let chat=[], typing=false;
function initChat(){
  const s=$('ai-sug'); s.innerHTML='';
  ['Create me a workout plan','What should I eat today?','How do I build bigger arms?','Am I progressing well?'].forEach(t=>{
    const d=document.createElement('div'); d.className='sug'; d.textContent=t;
    d.onclick=()=>{ $('ai-in').value=t; sendChat(); };
    s.appendChild(d);
  });
  $('chatlog').innerHTML='';
  bub('ai',`Hey ${APP.profile.name||'there'}! 👋 I'm your AI fitness coach. Ask me anything about training, nutrition, or your progress!`);
  $('ai-in').addEventListener('keydown',e=>{ if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendChat();} });
}
function clearChat(){ chat=[]; initChat(); }
function bub(t,txt){
  const d=document.createElement('div'); d.className='bub '+(t==='me'?'me':'ai'); d.textContent=txt;
  $('chatlog').appendChild(d); $('chatlog').scrollTop=$('chatlog').scrollHeight;
  return d;
}
async function sendChat(){
  if(typing)return;
  const inp=$('ai-in');
  const msg=inp.value.trim().slice(0,500);
  if(!msg)return;
  inp.value='';
  bub('me',msg);
  const key=(APP.settings.apiKey||'').replace(/\s/g,'');
  if(!key){ bub('ai','Add your Anthropic API key in Profile → AI Coach to enable coaching. Get one at console.anthropic.com'); return; }
  typing=true; $('ai-send').disabled=true;
  const tb=bub('ai','⋯ Thinking…');
  chat.push({role:'user',content:msg});
  if(chat.length>20)chat=chat.slice(-20);
  const sys=`You are a fitness coach in FitStreak app. Be concise (2-4 sentences), encouraging, science-based.
User: ${APP.profile.name}, goal: ${APP.profile.goal}, level: ${APP.profile.level}, weight: ${APP.profile.weight}kg, height: ${APP.profile.height}cm, age: ${APP.profile.age}.
Workouts done: ${APP.history.length}. Streak: ${APP.streak}. Daily calorie goal: ${APP.nutrition.goals.calories} kcal.`;
  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json','x-api-key':key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
      body:JSON.stringify({model:'claude-haiku-4-5-20251001',max_tokens:500,system:sys,messages:chat})
    });
    if(!res.ok){
      const raw=await res.text();
      let m='HTTP '+res.status;
      try{ m=JSON.parse(raw).error?.message||raw; }catch{}
      throw new Error(m);
    }
    const d=await res.json();
    const reply=d.content?.[0]?.text||'No response.';
    chat.push({role:'assistant',content:reply});
    tb.remove(); bub('ai',reply);
  }catch(e){
    tb.remove(); bub('ai','⚠️ '+(e.message||'Error'));
    chat.pop();
  }finally{ typing=false; $('ai-send').disabled=false; }
}

/* ============ PROFILE ============ */
function renderProfile(){
  $('pr-name').textContent=APP.profile.name||'Athlete';
  const li=levelInfo(APP.xp);
  $('pr-lvl').textContent=`Level ${li.lvl} · ${li.tier}`;
  $('s-goal').value=APP.profile.goal||'build_muscle';
  $('s-act').value=String(APP.settings.activityLevel||1.55);
  $('s-w').value=APP.profile.weight||'';
  $('s-h').value=APP.profile.height||'';
  $('s-a').value=APP.profile.age||'';
  $('s-cal').textContent=APP.nutrition.goals.calories+' kcal';
  $('s-macros').textContent=`${APP.nutrition.goals.protein}g / ${APP.nutrition.goals.carbs}g / ${APP.nutrition.goals.fat}g`;
  $('s-key').textContent=APP.settings.apiKey?'●●●●'+APP.settings.apiKey.slice(-4):'Not set';
  $('s-rest').classList.toggle('on',APP.settings.restTimerOn!==false);
  $('s-dur').textContent=(APP.settings.restDuration||90)+'s';
}
function saveSettings(){
  const ng=$('s-goal').value, na=parseFloat($('s-act').value)||1.55;
  const nw=num($('s-w').value,0,300), nh=num($('s-h').value,0,250), nA=num($('s-a').value,0,100);
  const ch=ng!==APP.profile.goal||na!==APP.settings.activityLevel||nw!==APP.profile.weight||nh!==APP.profile.height||nA!==APP.profile.age;
  APP.profile.goal=ng; APP.settings.activityLevel=na;
  if(nw)APP.profile.weight=nw; if(nh)APP.profile.height=nh; if(nA)APP.profile.age=nA;
  if(ch&&APP.profile.weight&&APP.profile.height){ calcGoals(); toast('Goals updated!','ok'); }
  save(); renderProfile();
}
function toggleRest(){ APP.settings.restTimerOn=!APP.settings.restTimerOn; $('s-rest').classList.toggle('on',APP.settings.restTimerOn); save(); }
function cycleRestDur(){
  const o=[30,60,90,120,180,240,300];
  APP.settings.restDuration=o[(o.indexOf(APP.settings.restDuration||90)+1)%o.length];
  $('s-dur').textContent=APP.settings.restDuration+'s'; save();
}
function openApiKey(){ $('key-in').value=APP.settings.apiKey||''; openMo('m-key'); }
function saveKey(){
  const k=$('key-in').value.replace(/\s/g,'');
  if(k&&k.length<20){toast('Key too short','err');return;}
  APP.settings.apiKey=k; save(); closeMo('m-key'); renderProfile();
  toast(k?'Key saved!':'Key removed','ok');
}
function exportData(){
  try{
    const o=JSON.parse(JSON.stringify(APP)); delete o.settings.apiKey;
    const b=new Blob([JSON.stringify(o,null,2)],{type:'application/json'});
    const u=URL.createObjectURL(b), a=document.createElement('a');
    a.href=u; a.download='fitstreak-'+today()+'.json'; a.click();
    URL.revokeObjectURL(u);
    toast('Exported (key excluded)','ok');
  }catch{ toast('Export failed','err'); }
}
function resetAll(){
  if(confirm('⚠️ Delete ALL data permanently?')){
    localStorage.removeItem('fitstreak_v2');
    localStorage.removeItem('fitstreak_active');
    location.reload();
  }
}

/* ============ BOOT ============ */
function initApp(){
  if(!APP.workouts||!APP.workouts.length) APP.workouts=TEMPLATES.map(t=>({...t}));
  // Merge in new templates from code updates
  const ids=new Set(APP.workouts.map(w=>w.id));
  TEMPLATES.filter(t=>!ids.has(t.id)).forEach(t=>APP.workouts.push({...t}));
  // Streak check
  if(APP.lastWorkoutDate && daysDiff(APP.lastWorkoutDate,today())>1){ APP.streak=0; save(); }
  renderHome(); initChat(); renderProfile();
  loadAW();
}
function boot(){
  if('serviceWorker' in navigator){
    navigator.serviceWorker.getRegistrations().then(rs=>{
      Promise.all(rs.map(r=>r.unregister())).then(()=>navigator.serviceWorker.register('./sw.js?v=200').catch(()=>{}));
    }).catch(()=>{});
  }
  const saved=load();
  if(saved){
    try{
      APP={...APP,...saved};
      APP.profile={...APP.profile,...(saved.profile||{})};
      APP.settings={...APP.settings,...(saved.settings||{})};
      APP.nutrition={...APP.nutrition,...(saved.nutrition||{})};
      APP.xp=parseInt(APP.xp)||0;
      if(!APP.xpLog)APP.xpLog=[];
      if(!APP.prs)APP.prs={};
      if(!APP.customWorkouts)APP.customWorkouts=[];
      // Migrate old workout template shape (exercises→ex, defaultSets→sets, emoji→e, description→d)
      APP.workouts=(APP.workouts||[]).map(w=>({
        id:w.id, name:w.name, tags:w.tags||[],
        ex:w.ex||w.exercises||[], sets:w.sets||w.defaultSets||3,
        e:w.e||w.emoji||'🏋️', d:w.d||w.description||'', custom:!!(w.custom||w.isCustom)
      }));
      APP.customWorkouts=(APP.customWorkouts||[]).map(w=>({
        id:w.id, name:w.name, tags:w.tags||[],
        ex:w.ex||w.exercises||[], sets:w.sets||w.defaultSets||3,
        e:w.e||w.emoji||'⚙️', d:w.d||w.description||'Custom workout', custom:true
      }));
      trimDays();
    }catch{ /* keep defaults */ }
  }
  setTimeout(()=>{
    $('splash').classList.add('off');
    if(!saved||!APP.profile.name){ initOB(); }
    else{ $('app').classList.add('on'); initApp(); }
  },900);
}
boot();
