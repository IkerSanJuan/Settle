export const DEFAULT_PROFILE = {
  origin: 'France', destination: 'Berkeley, California', arrival: '', school: 'UC Berkeley',
  housing: 'dorm', furnished: 'yes', bathroom: 'shared', residence: 'UC Berkeley campus',
  budget: 250, shopping: 'both', plugs: 'eu', secondhand: true, owned: [], name: '', completed: false
};

export const CATEGORIES = ['All essentials', 'Sleep', 'Bath', 'Kitchen', 'Study', 'Everyday'];

// Planning allowances, not product offers. Retailer searches resolve current prices and availability.
export const ITEMS = [
  {id:'bedding', name:'A fresh set of sheets', category:'Sleep', price:25, high:45, art:'bedding', color:'peach', priority:'Arrival day', query:'bed sheet set', retailers:['target','amazon','ikea'], why:'One less thing to think about on your first night.', detail:'Check your exact mattress size before ordering. Traditional UC Berkeley residence halls use Twin XL; apartment sizes vary.', source:'https://housing.berkeley.edu/moving-in-and-out/move-in-checklist/'},
  {id:'pillow', name:'Your first-night pillow', category:'Sleep', price:12, high:25, art:'pillow', color:'sage', priority:'Arrival day', query:'bed pillow', retailers:['target','ikea','amazon'], why:'A small comfort after a very long journey.', detail:'Choose a pillow you like and check whether your sheet set includes a pillowcase.'},
  {id:'towels', name:'Fresh-start towels', category:'Bath', price:15, high:30, art:'towels', color:'lilac', priority:'Arrival day', query:'bath towel set', retailers:['target','ikea','amazon'], why:'A bath towel and hand towel for day one.', detail:'Look for an absorbent, quick-drying set. A second bath towel makes laundry days easier.'},
  {id:'caddy', name:'The shower sidekick', category:'Bath', price:10, high:18, art:'caddy', color:'blue', priority:'Arrival day', query:'mesh shower caddy', retailers:['target','amazon'], why:'Keep everything together in a shared bathroom.', detail:'A portable caddy keeps your toiletries in one place. A mesh version packs flat and dries easily.', condition:'shared'},
  {id:'sandals', name:'Shared-shower sandals', category:'Bath', price:8, high:15, art:'sandals', color:'peach', priority:'Arrival day', query:'shower sandals', retailers:['target','amazon'], why:'Made for the walk from your room to the showers.', detail:'Choose a water-friendly pair that fits securely.', condition:'shared'},
  {id:'adapter', name:'A connection to home', category:'Study', price:12, high:22, art:'adapter', color:'yellow', priority:'Arrival day', query:'travel plug adapter USA type A B', retailers:['amazon','target'], why:'For chargers with plugs that don’t fit US outlets.', detail:'Check the plug and input rating on each device. A plug adapter changes the shape of the plug; it does not convert voltage. Confirm compatibility before buying or using one.', condition:'adapter'},
  {id:'laundry', name:'Laundry-day companion', category:'Everyday', price:12, high:25, art:'basket', color:'sage', priority:'First week', query:'collapsible laundry basket', retailers:['target','ikea','amazon'], why:'A light basket for the trip to the laundry room.', detail:'Check the laundry setup in your building. A collapsible basket takes less space in a small room.'},
  {id:'lamp', name:'Late-night study light', category:'Study', price:18, high:35, art:'lamp', color:'yellow', priority:'First week', query:'LED desk lamp', retailers:['ikea','target','amazon'], why:'A little light for your next big idea.', detail:'An adjustable LED desk lamp can help in a shared room. Check what is already supplied before buying.'},
  {id:'dishes', name:'A table for one', category:'Kitchen', price:15, high:30, art:'dishes', color:'blue', priority:'First week', query:'plate bowl mug set', retailers:['ikea','target','amazon'], why:'A plate, bowl, and mug to make the place yours.', detail:'Start with just the pieces you use. Coordinate shared kitchen items with roommates.'},
  {id:'cutlery', name:'The everyday utensils', category:'Kitchen', price:8, high:15, art:'cutlery', color:'peach', priority:'First week', query:'flatware set', retailers:['ikea','target','amazon'], why:'The things you miss at your very first meal.', detail:'A small reusable set is enough to get started. Ask your roommates what is shared.'},
  {id:'cleaning', name:'A clean-slate kit', category:'Everyday', price:15, high:25, art:'cleaning', color:'lilac', priority:'Arrival day', query:'cleaning supplies sponge cloth', retailers:['target','amazon'], why:'A quick wipe-down before you unpack.', detail:'Start with a cloth, sponge and a surface-appropriate cleaner. Share supplies with roommates when practical.'},
  {id:'hangers', name:'Room for your favorites', category:'Everyday', price:6, high:12, art:'hangers', color:'yellow', priority:'First week', query:'clothes hangers', retailers:['target','ikea','amazon'], why:'Unpack once. Feel at home a little sooner.', detail:'Check your closet space and buy only the hangers you need.'},
  {id:'cookware', name:'First real meal', category:'Kitchen', price:25, high:50, art:'pan', color:'sage', priority:'First week', query:'saucepan frying pan set', retailers:['ikea','target','amazon'], why:'For a kitchen you’ll actually cook in.', detail:'Check the stove type and what your roommates already own before buying a pan.', condition:'kitchen'},
  {id:'desk', name:'A corner to focus', category:'Study', price:60, high:120, art:'desk', color:'blue', priority:'After settling in', query:'small desk', retailers:['ikea','target','amazon'], why:'An unfurnished room needs a study spot.', detail:'Measure the room before buying. A secondhand desk can be a good option; arrange collection and inspect its condition.', condition:'unfurnished'},
  {id:'chair', name:'Pull up a chair', category:'Study', price:35, high:80, art:'chair', color:'peach', priority:'After settling in', query:'desk chair', retailers:['ikea','target','amazon'], why:'For a study space without furniture yet.', detail:'Try the height and back support if you can. Coordinate collection for secondhand furniture.', condition:'unfurnished'}
];

export const STORES = [
  {id:'target', name:'Target Berkeley Central', short:'Target', mark:'◎', address:'2187 Shattuck Ave, Berkeley, CA', area:'Downtown Berkeley', description:'Everyday basics, bedding, bath, and cleaning supplies.', url:'https://www.target.com/sl/berkeley-central/3202', search:'https://www.target.com/s?searchTerm=', class:'target'},
  {id:'ikea', name:'IKEA Emeryville', short:'IKEA', mark:'IKEA', address:'4400 Shellmound Street, Emeryville, CA', area:'Emeryville', description:'Small-space furniture, kitchen basics, and home essentials.', url:'https://www.ikea.com/us/en/stores/emeryville/', search:'https://www.ikea.com/us/en/search/?q=', class:'ikea'},
  {id:'amazon', name:'Amazon', short:'Amazon', mark:'a', address:'Online store', area:'Delivered to you', description:'Compare options online. Confirm delivery dates and your building’s package policy.', url:'https://www.amazon.com/', search:'https://www.amazon.com/s?k=', class:'amazon', online:true},
  {id:'target-university', name:'Target Berkeley University Ave', short:'Target', mark:'◎', address:'1414 University Ave, Berkeley, CA', area:'West Berkeley', description:'Another local stop for household essentials and groceries.', url:'https://www.target.com/sl/berkeley-univ-ave/3267', search:'https://www.target.com/s?searchTerm=', class:'target'}
];

export function recommend(profile) {
  return ITEMS.filter(item => {
    if(profile.owned.includes(item.id)) return false;
    if(item.condition === 'shared' && profile.bathroom !== 'shared') return false;
    if(item.condition === 'adapter' && profile.plugs === 'us') return false;
    if(item.condition === 'kitchen' && profile.housing === 'dorm') return false;
    if(item.condition === 'unfurnished' && (profile.furnished !== 'no' || profile.housing === 'dorm')) return false;
    return true;
  });
}

export function budgetPlan(profile) {
  const candidates = recommend(profile);
  const ordered = [...candidates].sort((a,b)=> ['Arrival day','First week','After settling in'].indexOf(a.priority) - ['Arrival day','First week','After settling in'].indexOf(b.priority));
  let remaining = Number(profile.budget);
  const selected=[];
  for (const item of ordered) if(item.price <= remaining) {selected.push(item.id); remaining -= item.price;}
  return {selected, total:Number(profile.budget)-remaining, remaining, deferred: ordered.filter(i=>!selected.includes(i.id))};
}
