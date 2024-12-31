import React, { useState } from 'react';
import { Layout, Menu, Grid, theme } from 'antd';
import minecraftLogo from '../assets/minecraft.png';
import rustLogo from '../assets/rust.png';
import zomboidLogo from '../assets/zomboid.png';
import sevenLogo from '../assets/seven.png';
import './header.css';

const { Header, Content, Sider } = Layout;
const { useBreakpoint } = Grid;

const headerItems = [
  { key: 'Servers', label: 'Servers' },
  { key: 'About', label: 'About' }
];

const serverInfo = {
  Minecraft: [
    "Pixelmon",
    "Steampunk"
  ],
  Rust: [
    "Rust server"
  ],
  "Project Zomboid": [
    "Zomboid server"
  ],
  "7Days2Die": [
    "7 Days to Die server"
  ]
}

const getLogoByGame = (game) => {
  switch (game) {
    case 'Minecraft':
      return { src: minecraftLogo, height: "160%" };
    case 'Rust':
      return { src: rustLogo, height: "120%" }
    case 'Project Zomboid':
      return { src: zomboidLogo, height: "100%" }
    case '7Days2Die':
      return { src: sevenLogo, height: "100%", }
    default: break
  }
}

const gameServers = Object.keys(serverInfo).map((game, index) => {
  const key = String(index + 1);
  const logo = getLogoByGame(game)
  return {
    key: game,
    icon: React.createElement("img", logo),
    label: `${game}`,
    children: serverInfo[game].map((server, j) => {
      const subKey = serverInfo[game][j]
      return {
        key: subKey,
        label: `${server}`,
      };
    }),
  };
});

const defaultOpenKeys = gameServers.map(server => server.key);

const AppLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const screens = useBreakpoint();

  const [selectedItem, setSelectedItem] = useState('Servers');

  const handleMenuClick = (selection) => {
    setSelectedItem(selection.key);
  };

  const renderContent = () => {
    if (selectedItem === 'About') {
      return <div><h1>Dalton</h1><p>This is where Dalton should be</p></div>;
    }

    switch (selectedItem) {
      case 'Pixelmon':
        return (<div>
          <div><h1>play.pixelmon.bolokay.com</h1></div>
          <script type="application/javascript">
              {`
                window.addEventListener('message', function(e) {
                  if (e.data.uid && e.data.type === 'sizeUpdate') {
                    var i = document.querySelector('iframe[name="' + e.data.uid + '"]');
                    i.style.width = e.data.payload.width;
                    i.style.height = e.data.payload.height;
                  }
                });
              `}
            </script>
            <iframe
              src="https://cdn.battlemetrics.com/b/horizontal500x80px/31182794.png?foreground=%23EEEEEE&background=%23222222&lines=%23333333&linkColor=%231185ec&chartColor=%23FF0700"
              frameBorder="0"
              style={{ border: 0, width: '100%', maxWidth: '500px', height: '100%' }}
              name="rust"
            ></iframe>
          </div>)
      case 'Steampunk':
        return(<div>
          <div><h1>play.steampunk.bolokay.com</h1></div>
          <script type="application/javascript">
              {`
                window.addEventListener('message', function(e) {
                  if (e.data.uid && e.data.type === 'sizeUpdate') {
                    var i = document.querySelector('iframe[name="' + e.data.uid + '"]');
                    i.style.width = e.data.payload.width;
                    i.style.height = e.data.payload.height;
                  }
                });
              `}
            </script>
            <iframe
              src="https://cdn.battlemetrics.com/b/horizontal500x80px/31182844.png?foreground=%23EEEEEE&background=%23222222&lines=%23333333&linkColor=%231185ec&chartColor=%23FF0700"
              frameBorder="0"
              style={{ border: 0, width: '100%', maxWidth: '500px', height: '100%' }}
              name="rust"
            ></iframe>
          </div>)
      case 'Rust server':
        return (
          <div>
            <div><h1>play.rust.bolokay.com</h1></div>
            <script type="application/javascript">
              {`
                window.addEventListener('message', function(e) {
                  if (e.data.uid && e.data.type === 'sizeUpdate') {
                    var i = document.querySelector('iframe[name="' + e.data.uid + '"]');
                    i.style.width = e.data.payload.width;
                    i.style.height = e.data.payload.height;
                  }
                });
              `}
            </script>
            <iframe
              src="https://cdn.battlemetrics.com/b/horizontal500x80px/31168677.html?foreground=%23EEEEEE&background=%23222222&lines=%23333333&linkColor=%231185ec&chartColor=%23FF0700"
              frameBorder="0"
              style={{ border: 0, width: '100%', maxWidth: '500px' }}
              name="rust"
            ></iframe>
          </div>
        );
      case 'Zomboid server':
        return <div><h1>play.zomboid.bolokay.com</h1></div>;
      case '7 Days to Die server':
        return <div><h1>play.sevendays.bolokay.com</h1></div>;
      default:
        return <div>Coming soon</div>;
    }
  };

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['Servers']}
          items={headerItems}
          onClick={handleMenuClick}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        {selectedItem !== 'About' && (
          <Sider
            collapsed={!screens.md}
            collapsedWidth={"15%"}
            width={220}
            style={{
              background: colorBgContainer,
            }}
          >
            <Menu
              mode="inline"
              defaultOpenKeys={defaultOpenKeys}
              style={{
                height: '100%',
                borderRight: 0,
              }}
              items={gameServers}
              onClick={handleMenuClick}
            />
          </Sider>
        )}
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;