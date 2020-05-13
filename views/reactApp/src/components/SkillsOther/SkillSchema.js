import skills from '../../assets/otherSkills/index'

// I know this has a higher time complexity then just making the skills objects, but just wanted to. I'm going to put all of these in mock axios call later anyway

const { bow, cooking, fighting, guitar, infantry, photography, poetry, steam, survival, weightlifting } = skills

const bowDetails = ['Bowyer', 'I can', bow, ['Make Bows', 'Fletch Arrows', 'Make Bow Strings', 'Shoot Bows'] ]
const cookingDetails = ['Cook', 'I specialize in', cooking, ['Traditional Southeast Asian Cuisine', ' Traditional Mexican and Texmex', 'Grilling Meat', 'Gluten Free', 'Vegan Substitutions']]
const fightingDetails = ['Martial Arts', 'I enjoy practicing', fighting, ['Jujitsu', 'Boxing', 'HEMA', 'MMA'] ]
const guitarDetails = ['Songwriter', 'I', guitar, ['Write Songs', 'Play Guitar', 'Sing'] ]
const infantryDetails = ['Infantry', `I'm an expert in`, infantry, ['Close Combat', 'Small Unit Tactics', 'Fire Arms', 'Jungle Warefare', 'Training', 'Leadership', 'First Aid']]
const photographyDetails = ['Photography', 'I studied', photography, ['35mm Film', 'Black and White Film', 'Film Exposure', 'Printing']]
const poetryDetails = ['Poetry', 'I like writting', poetry, ['Short Poems', 'Haikus', `Many of my poems are inspired by what I'm feeling in the moment`, 'https://hellopoetry.com/ryan-clark/poems/popular/']]
const steamDetails = ['Video Games', 'I like', steam, [ 'Playing Them', 'Making Them', 'Modding Them']]
const survivalDetails = ['Survival', `I'm an expert in`, survival, ['Inprovised Shelters', 'Hunting', 'Field First Aid', 'Orienteering']]

const schemaBuider = skill => {
    return { title: skill[0], subtitle: skill[1], image: skill[2], skillArray: skill[3] }
}

export default [
    bowDetails,
    cookingDetails,
    fightingDetails,
    guitarDetails,
    infantryDetails,
    photographyDetails,
    poetryDetails,
    steamDetails,
    survivalDetails
].reduce(( array, skill) => {
    array.push( schemaBuider(skill) )
    return array
}, [])

