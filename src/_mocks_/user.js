import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company: sample(['V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI']),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'offline']),
  role: sample(['A', 'B', 'C', 'D'])
}));

export default users;
