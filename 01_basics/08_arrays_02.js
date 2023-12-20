const hero=["A","B","C" ]
const newhero=["Aa","Bb","Cc" ]
hero.push(newhero)
console.log(hero);
const allHero=hero.concat(newhero)
console.log(allHero);
const all_new_hero=[...hero, ...newhero]
console.log(all_new_hero)