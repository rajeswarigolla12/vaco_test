// import Cookies from 'js-cookie';
import axios from 'axios';
const ENTERPRISE_SCHEMAS = [{
  id: 1,
  name: 'Address',
  description: 'Address 123',
  status: 'Published',
  values: [{
    id: 1,
    name: 'Address 1',
    type: 'String',
    default: '',
    description: 'Address 1 desc',
  },
  {
    id: 2,
    name: 'Address 2',
    type: 'String',
    default: '',
    description: 'Address 2 desc',
  },
  {
    id: 3,
    name: 'City',
    type: 'String',
    default: '',
    description: 'City desc',
  },
  {
    id: 4,
    name: 'State',
    type: 'String',
    default: '',
    description: 'State desc',
  },
  {
    id: 5,
    name: 'Zipcode',
    type: 'String',
    default: '',
    description: 'Zipcode desc',
  }]
},
  {
    id: 2,
    name: 'Email',
    description: 'Email 123',
    status: 'Published',
    values: [{
      id: 1,
      name: 'Email',
      type: 'String',
      default: '',
      description: 'Email 1 desc',
    }]
  },
  {
    id: 3,
    name: 'Geo Location',
    description: 'Geo Location 123',
    status: 'Published',
    values: [{
      id: 1,
      name: 'Latitude',
      type: 'String',
      default: '',
      description: 'Latitude desc',
    },
    {
      id: 2,
      name: 'Longitude',
      type: 'String',
      default: '',
      description: 'Longitude desc',
    }]
  },
  {
    id: 4,
    name: 'Phone Num',
    description: 'Phone Num 123',
    status: 'Published',
    values: [{
      id: 1,
      name: 'Phone Num',
      type: 'String',
      default: '',
      description: 'Phone Num 1 desc',
    }]
  },
  {
    id: 5,
    name: 'Fax',
    description: 'Fax 123',
    status: 'Published',
    values: [{
      id: 1,
      name: 'Fax1',
      type: 'String',
      default: '',
      description: 'Fax desc',
    }]
  },
  {
    id: 6,
    name: 'Gender',
    description: 'Gender',
    status: 'Published',
    values: [{
      id: 1,
      name: 'Male',
      type: 'String',
      default: '',
      description: 'Gender desc',
    },
    {
      id: 2,
      name: 'Female',
      type: 'String',
      default: '',
      description: 'Gender desc',
    }]
  },
  {
    id: 7,
    name: 'Phone Num',
    description: 'Phone Num 123',
    status: 'Published',
    values: [{
      id: 1,
      name: 'Phone Num',
      type: 'String',
      default: '',
      description: 'Phone Num 1 desc',
    }]
  },
  {
    id: 8,
    name: 'Fax',
    description: 'Fax 123',
    status: 'Published',
    values: [{
      id: 1,
      name: 'Fax1',
      type: 'String',
      default: '',
      description: 'Fax desc',
    }]
  },
  {
    id: 9,
    name: 'Gender',
    description: 'Gender',
    status: 'Published',
    values: [{
      id: 1,
      name: 'Male',
      type: 'String',
      default: '',
      description: 'Gender desc',
    },
    {
      id: 2,
      name: 'Female',
      type: 'String',
      default: '',
      description: 'Gender desc',
    }]
  }
];
const MY_SCHEMAS = [{
  id: 1,
  name: 'Schema 1',
  description: 'Schema 1 Desc',
  status: 'Draft',
  values: [{
    id: 1,
    name: 'Address 1',
    type: 'String',
    default: '',
    description: 'Address 1 desc',
  },
  {
    id: 2,
    name: 'Address 2',
    type: 'String',
    default: '',
    description: 'Address 2 desc',
  },
  {
    id: 3,
    name: 'City',
    type: 'String',
    default: '',
    description: 'City desc',
  },
  {
    id: 4,
    name: 'State',
    type: 'String',
    default: '',
    description: 'State desc',
  },
  {
    id: 5,
    name: 'Zipcode',
    type: 'String',
    default: '',
    description: 'Zipcode desc',
  }]
},
{
  id: 2,
  name: 'Schema 2',
  description: 'Schema 2 Desc',
  status: 'Published',
  values: [{
    id: 1,
    name: 'Email',
    type: 'String',
    default: '',
    description: 'Email 1 desc',
  }]
},
{
  id: 3,
  name: 'Schema 3',
  description: 'Schema 3 Desc',
  status: 'Approved',
  values: [{
    id: 1,
    name: 'Latitude',
    type: 'String',
    default: '',
    description: 'Latitude desc',
  },
  {
    id: 2,
    name: 'Longitude',
    type: 'String',
    default: '',
    description: 'Longitude desc',
  }]
},
{
  id: 4,
  name: 'Scheme 4',
  description: 'Schema 4 Desc',
  status: 'Draft',
  values: [{
    id: 1,
    name: 'Phone Num',
    type: 'String',
    default: '',
    description: 'Email 4 desc',
  }]
},
{
  id: 5,
  name: 'New Schema',
  description: 'Schema 5 Desc',
  status: 'Published',
  values: [{
    id: 1,
    name: 'Gender',
    type: 'String',
    default: '',
    description: 'Email 5 desc',
  }]
},
{
  id: 6,
  name: 'New Schema 6',
  description: 'Schema 6 Desc',
  status: 'Published',
  values: [{
    id: 1,
    name: 'Gender',
    type: 'String',
    default: '',
    description: 'Email 6 desc',
  }]
},
{
  id: 7,
  name: 'New Schema 7',
  description: 'Schema 7 Desc',
  status: 'Published',
  values: [{
    id: 1,
    name: 'Gender',
    type: 'String',
    default: '',
    description: 'Email 7 desc',
  }]
},
{
  id: 8,
  name: 'New Schema 8',
  description: 'Schema 8 Desc',
  status: 'Published',
  values: [{
    id: 1,
    name: 'Gender',
    type: 'String',
    default: '',
    description: 'Email 8 desc',
  }]
}];

export default {
  getEnterpriseSchemas() {
    return new Promise(resolve => {
      resolve(ENTERPRISE_SCHEMAS);
    });
  },
  getMySchemas() {
    return new Promise(resolve => {
      resolve(MY_SCHEMAS);
    });
  },
};