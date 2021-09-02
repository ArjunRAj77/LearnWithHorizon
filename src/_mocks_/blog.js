import faker from 'faker';
// utils
import { mockImgCover } from '../utils/mockImages';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Stress-management in the workplace and educational institutions.',
  'Religion and its relevance in today’s world',
  'Communicable and non-communicable diseases.',
  'Underpaid teachers and their effects on the quality of teaching.',
  'Gender Discrimination and the LGBTQ Community.',
  'Should sports marketing professionals earn more money in light of the massive television revenue that owners make?',
  'In what ways has communication changed in the last quarter-century? Have these changes been largely positive, negative, or neutral for the people affected?',
  'How to stop wasting paper and save trees?',
  'Should more films about environmental issues be produced?',
  'Eyewitness testimony & memory: the correlation between them',
  'Internationalizing Student Learning',
  'Is artificial intelligence going to dominate the planet?',
  'Attention-deficit syndrome: myth to justify persons or reality?',
  'Global Partnerships',
  'What Electric Bills Can Tell You About Energy Use',
  'The role cryogenics may play in future.',
  'Stem cells to assist in reducing death rates in heart attack cases',
  'Is it beneficial for wild animals to have interactions with people?',
  'What are the future of computing and artificial intelligence?',
  'Never-ending society evolution',
  'Are There Dangerous Levels of Lead in Local Soil?',
  'What technologies does NASA use to explore Mars?',
  'Can alternative energy effectively replace fossil fuels?',
  'How do regular people influence the technological progress?',
  'Linear vs. Logarithmic Changes: What Works Best for Human Senses?',
  'What is Energy?',
  'How did Bill Gates and Steve Jobs change the world?',
  'The Science Behind the Olympics',
  'Can nanomedicine potentially extend the human lifespan?',
  'Transforming Bacteria to Make Colored Pigments',
  'Coastal and Marine Geology'
];

const posts = [...Array(23)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: mockImgCover(index + 1),
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`
  }
}));

export default posts;
