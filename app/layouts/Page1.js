import React from 'react';
import { Layout, Menu, Icon, Drawer, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import style from './mainLayout.less';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

/* eslint-disable react/prefer-stateless-function */
class Page1 extends React.PureComponent {
  state = {
    collapsed: false,
    showMenuList: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };handleMenuList

  handleMenuList = () => {
    this.setState({ showMenuList: true })
  }
  
  onClose = () => {
    this.setState({
      showMenuList: false
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Layout>
            <Header>
              <div className={style.menu}>
                <Row className={style.headerPart}>
                  <Col span={1}>
                    <img className={style.menuIcon} src={require(`../images/menu.svg`)} onClick={this.handleMenuList} />
                  </Col>
                  <Col span={21}>
                    <h2 className={style.logo}>SAMAARA</h2>
                  </Col>
                  <Col span={2}>
                    <img className={style.user} src={require(`../images/user.svg`)} />
                  </Col>
                </Row>
              </div>
            </Header>
            <Content className={style.contentPart}>
              {children}
            </Content>
            <Footer className={style.footer}>
              <p className={style.footerData}>Kwartile Inc ©2020</p>
            </Footer>
          </Layout>
          <Drawer width={300}
            height='61rem'
            onClose={this.onClose}
            visible={this.state.showMenuList}
            placement='left' mask={false}
            style={{ opacity: '0.8' }}
          >
            <div>
              <img src={require('../images/menuCancel.svg')} className={style.imgStyles} onClick={this.onClose} />
              <span style={{ color: 'white' }}>SAMAARA Navigation</span>
              <Menu mode="inline">
                <Menu.Item key="2" onClick={this.onClose}><Icon type="file" style={{ fontSize: '24px', paddingRight:'0.8em'}}/><span>Schemas</span></Menu.Item>
                <Menu.Item key="12" onClick={() => {this.onClose()}}><img src={require('../images/mainuser.svg')} className={style.imgStyles} /><span>Log out</span></Menu.Item>
              </Menu>
            </div>
          </Drawer>

      {/* // <Layout>
      //   <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
      //     <div className={style.logo} />
      //     <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>            
      //       <Menu.Item key="1">
      //         <Icon type="file" />
      //         <span>Schemas</span>
      //       </Menu.Item>
      //     </Menu>
      //   </Sider>
      //   <Layout>
      //     <Header style={{ background: '#fff', padding: 0 }}>
      //       <Icon
      //         className={style.trigger}
      //         type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
      //         onClick={this.toggle}
      //       />
      //     </Header>
      //     <Content
      //       style={{
      //         margin: '24px 16px',
      //         padding: 24,
      //         background: '#fff',
      //         minHeight: 280,
      //       }}
      //     >
      //       {children}
      //     </Content>
      //     <Footer style={{ textAlign: 'center' }}>
      //       Kwartile Inc ©2020
      //     </Footer>
      //   </Layout>
      // </Layout> */}
      </div>
    );
  }
}

Page1.propTypes = {
  children: PropTypes.any,
};

export default Page1;
