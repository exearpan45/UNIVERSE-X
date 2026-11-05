export type Planet = {
  name: string
  type: string
  color: string
  description: string
  distance: string
  diameter: string
}

export const planets: Planet[] = [
  { name: 'Mercury', type: 'TERRESTRIAL', color: '#a9a39b', description: 'A small, crater-covered world racing around the Sun.', distance: '57.9M km', diameter: '4,879 km' },
  { name: 'Venus', type: 'TERRESTRIAL', color: '#d7a56d', description: 'A volcanic world wrapped in a dense, scorching atmosphere.', distance: '108.2M km', diameter: '12,104 km' },
  { name: 'Earth', type: 'TERRESTRIAL', color: '#3e9ee8', description: 'Our pale blue home, the only world currently known to host life.', distance: '149.6M km', diameter: '12,742 km' },
  { name: 'Mars', type: 'TERRESTRIAL', color: '#c96f4b', description: 'A cold desert world with ancient rivers and towering volcanoes.', distance: '227.9M km', diameter: '6,779 km' },
  { name: 'Jupiter', type: 'GAS GIANT', color: '#d7a77f', description: 'A giant world of swirling clouds and immense storms.', distance: '778.6M km', diameter: '139,820 km' },
  { name: 'Saturn', type: 'GAS GIANT', color: '#d9c18c', description: 'A gas giant surrounded by a spectacular system of rings.', distance: '1.43B km', diameter: '116,460 km' },
  { name: 'Uranus', type: 'ICE GIANT', color: '#80d5d6', description: 'An ice giant that rotates on its side in a blue-green haze.', distance: '2.87B km', diameter: '50,724 km' },
  { name: 'Neptune', type: 'ICE GIANT', color: '#4779e8', description: 'A distant, deep-blue world swept by supersonic winds.', distance: '4.50B km', diameter: '49,244 km' },
]