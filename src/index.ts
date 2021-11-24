import { Company } from './company';
import { User } from './User';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);

