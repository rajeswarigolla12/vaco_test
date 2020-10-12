/**
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Tabs, Row, Col,Icon, Form, Input,Card } from 'antd';
import _ from 'lodash';


const styles = require('./schemas.less');
const { TabPane } = Tabs;

interface SProps {
  dispatch: any;
  getEnterpriseSchemas: any;
  getMySchemas: any;
  form: any;
  history: any;
}

interface SState {
  searchMode: boolean;
  filterList:any;
  username:any;
  users:any;
}

/* eslint-disable react/prefer-stateless-function */
class Schemas extends React.PureComponent<SProps, SState> {
  constructor(props: SProps) {
    super(props);
    this.state = {
      searchMode: false,
      filterList:[],
      username:'',
      users:[
        {
          "id": "123-s2-546",
          "name": "John Jacobs",
          "items": ["bucket", "bottle"],
          "address": "1st Cross, 9th Main, abc Apartment",
          "pincode": "5xx012"
        },
        {
          "id": "123-s3-146",
          "name": "David Mire",
          "items": ["Bedroom Set"],
          "address": "2nd Cross, BTI Apartment",
          "pincode": "4xx012"
        },
        {
          "id": "223-a1-234",
          "name": "Soloman Marshall",
          "items": ["bottle"],
          "address": "Riverbed Apartment",
          "pincode": "4xx032"
        },
        {
          "id": "121-s2-111",
          "name": "Ricky Beno",
          "items": ["Mobile Set"],
          "address": "Sunshine City",
          "pincode": "5xx072"
        },
        {
          "id": "123-p2-246",
          "name": "Sikander Singh",
          "items": ["Air Conditioner"],
          "address": "Riverbed Apartment",
          "pincode": "4xx032"
        },
        {
          "id": "b23-s2-321",
          "name": "Ross Wheeler",
          "items": ["Mobile"],
          "address": "1st Cross, 9th Main, abc Apartement",
          "pincode": "5xx012"
        },
        {
          "id": "113-n2-563",
          "name": "Ben Bish",
          "items": ["Kitchen Set", "Chair"],
          "address": "Sunshine City",
          "pincode": "5xx072"
        },
        {
          "id": "323-s2-112",
          "name": "John Michael",
          "items": ["Refrigerator"],
          "address": "1st Cross, 9th Main, abc Apartement",
          "pincode": "5xx012"
        },
        {
          "id": "abc-34-122",
          "name": "Jason Jordan",
          "items": ["Mobile"],
          "address": "Riverbed Apartment",
          "pincode": "4xx032"
        }
      ]
    };
  }

  handleSearchEnterprise = (e) => {
    // this.setState({
    //   enterpriseSchemaName: e.target.value,
    //   searchEnterpriseSchemaName: true
    // })
    let filterList = this.state.users.filter((user)=> user.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1)
    this.setState({
        filterList:filterList,
        username:e.target.value
    })
  }
  enterSearchMode = () => {
    this.setState({ searchMode: !this.state.searchMode,username:'',filterList:[]});
    this.props.form.resetFields();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let cardList = this.state.filterList.length > 0 ? this.state.filterList : [{name:'No data found'}];
    return (
            <Fragment>
              <div style={{marginLeft:"12px"}}>
              <Row>
                <Col span={6}>
                    <div>
                      <Form.Item className={styles.formItem}>
                        {getFieldDecorator('enterpriseSchema', {})(
                          <Input type="text"
                            autoFocus
                            placeholder="Search Schemas..."
                           prefix={<Icon type='search' className={styles.InputIcon} />}
                            suffix={<Icon type='close' onClick={this.enterSearchMode} className={styles.InputIcon} />}
                            onChange={(e)=>this.handleSearchEnterprise(e)}
                            value={this.state.username} 
                            className={styles.inputField}
                          />
                          )}
                      </Form.Item>
                    </div>
                    </Col>
                    </Row>
                    <Row>
                      <Col span={6} style={{overflowY:'scroll',maxHeight:'304px'}}>
                        {cardList.map((cardItem)=>
                        <Card
                        title={cardItem.id}
                        bordered={false}
                        headStyle={{ padding: '0px 0px 0px 5px !important' }}
                        bodyStyle={{ padding: '0 0px 40px 0px' }}
                        className={styles.cardStyle}
                        >
                             <div>
                               {cardItem.name}
                             </div>
                             <div>
                               {cardItem.address}
                             </div>
                             <div>
                               {cardItem.pincode}
                             </div>
                          </Card>
                        
                        )}
                      
                      </Col>
                    </Row>
                    </div>
      </Fragment>
    );
  }
}

export default Form.create()(connect(({ schema }: any) => ({
  getEnterpriseSchemas: schema.EnterpriseSchemas || [],
  getMySchemas: schema.MySchemas || []
}))(Schemas));