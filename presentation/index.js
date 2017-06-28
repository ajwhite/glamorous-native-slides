// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Notes,
  Text,
  CodePane,
  Layout,
  Image,
  Fill
} from "spectacle";

import {withProps} from 'recompose'
import Terminal from 'spectacle-terminal'
import Typist from 'react-typist'
import CodeSlide from 'spectacle-code-slide';

import GlamorousLogo from './components/glamorous-logo';
import GlamorousLive from './components/glamorous-example';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  icon: require('../assets/icon.png'),
  hoc: require('../assets/HOC2.png'),
  hocPipeline: require('../assets/HOC-pipeline.png'),
  rooms: require('../assets/rooms.png'),
  styleTimeline: require('../assets/style-timeline.png'),
  robinGlamorous: require('../assets/robin-glamorous-example.png'),
  roomsSystemRows: require('../assets/rooms-system-rows.png')
};

preloader(images);

const theme = createTheme({
  primary: "gray",
  secondary: 'white',
  // secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const SlideTitle = withProps({
  size: 4,
  textColor: 'secondary',
  margin: '0px auto 20px'
  // fit: true
})(Heading)

/**
 * NOTES
 *
 * - Higher Order Component explanation
 *
 */
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide>
          <Heading size={4} textColor="secondary" fit>Composing Styled Components</Heading>
          <Text textSize="1em" textColor="secondary" margin="20px 0">With glamorous-native</Text>
          <Text textSize="1.3em" textColor="secondary">Atticus White</Text>

          <div style={{ margin: "20px 0" }}></div>

          <Layout>
            <Fill>
              <Text textSize="1em" textColor="secondary" margin={10}>🏡 Boston</Text>
            </Fill>
            <Fill>
              <Text textSize="1em" textColor="secondary" margin={10}>🏢 Robin</Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text textSize="1em" textColor="secondary" margin={10}>@atticoos</Text>
            </Fill>
            <Fill>
              <Text textSize="1em" textColor="secondary" margin={10}>@atticoos</Text>
            </Fill>
          </Layout>
        </Slide>


        <Slide>
          <SlideTitle>
            Robin + React Native
          </SlideTitle>
          <Image
            src={images.rooms}
            style={{height: 550}}
          />
        </Slide>


        <Slide>
          <SlideTitle>
            Robin + React Native
          </SlideTitle>
          <Image
            src="https://robinpowered.com/img/screens/iphone-user-schedule.png"
            style={{height: 550}}
          />
        </Slide>


        <Slide>
          <SlideTitle>
            What this talk <strong>is</strong>
          </SlideTitle>

          <List>
            <ListItem>glamorous-native</ListItem>
            <ListItem>An opinion</ListItem>
            <ListItem>Why, how, and where to compose styles</ListItem>
            <ListItem>Demo of glamorous-native</ListItem>
          </List>

          <Heading size={1}>😃</Heading>
        </Slide>


        <Slide>
          <SlideTitle>Code Along</SlideTitle>
          <br />
          <Terminal
            title="1. atticoos: ~(zsh)"
            showFirstEntry={true}
            output={[
              <Typist>npm install -g react-native-cli</Typist>,
              `react-native init GlamorousNativeDemo`,
              `cd GlamorousNativeDemo`,
              `npm install glamorous-native --save`,
              <div style={{ color: "#33B969"}}>SUCCESS: Your just got easier!</div>
            ]}
          />
        </Slide>


        <Slide>
          <SlideTitle>
            What this talk is <strong>not</strong>
          </SlideTitle>
          <List>
            <ListItem>Long!</ListItem>
            <ListItem>Free of tradeoffs</ListItem>
            <ListItem>The best way to style components</ListItem>
          </List>

          <Heading size={1}>😐</Heading>
        </Slide>


        <Slide>
          <SlideTitle>Styling in React Nativce</SlideTitle>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/welcome-jsx.example")}
          />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/examples/welcome-styles.example")}
          />
        </Slide>


        <Slide>
          <SlideTitle>Styling in React Native</SlideTitle>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/welcome-glamorous.example")}
          />
        </Slide>


        <Slide>
          <SlideTitle>The 🎶 and 💃</SlideTitle>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/examples/hoc-text-normal.example")}
          />
        </Slide>


        <CodeSlide
          bgColor="#2d2d2d"
          lang="js"
          code={require("raw-loader!../assets/examples/hoc-text-normal.example")}
          ranges={[
            {loc: [0, 11], note: 'Wrapping component'},
            {loc: [2, 9], note: 'Wrapped component'},
            {loc: [12, 19], note: 'Component styles'},
            {loc: [3, 5], note: 'Styles'},
            {loc: [6, 8], note: 'Props'}
          ]}
        />


        <Slide>
          <Heading size={4} textColor="secondary" style={{marginBottom: 50}}>We're not much different</Heading>
          <Layout>
            <Fill>
              <Text textSize="1em" textColor="secondary">Web</Text>
              <CodePane
                style={{marginRight: '5px', marginTop: 10, height: 430}}
                lang="js"
                source={require("raw-loader!../assets/examples/hoc-text-web-normal.example")}
              />
            </Fill>

            <Fill>
              <Text textSize="1em" textColor="secondary">Native</Text>
              <CodePane
                style={{marginLeft: '5px', marginTop: 10, height: 430}}
                lang="js"
                source={require("raw-loader!../assets/examples/hoc-text-normal.example")}
              />
            </Fill>
          </Layout>
        </Slide>



        <Slide>
          <SlideTitle>Inspiration From Web</SlideTitle>
          <Image src={images.styleTimeline} />
        </Slide>


        <Slide bgColor="#FFF2F2">
          <GlamorousLogo />

          <Text textSize={24} style={{margin: '<2>  </2>0px 0'}}>By Kent C. Dodds (@kentcdodds)</Text>

            {['API', 'Static Styles', 'Dynamic Styles'].map((title, i) => (
              <div style={{width: '400px', margin: '10px auto'}} key={i}>
                <Text textColor="primary" textSize={24}>{title}</Text>
                <CodePane
                  lang="js"
                  style={{width: 300}}
                  source={require(`raw-loader!../assets/examples/glamorous-api-${i + 1}.example`)}
                />
              </div>
            ))}
        </Slide>


        <Slide>
          <SlideTitle>Compositionally Styled Components</SlideTitle>
          <Layout>
            <Fill>
              <Text textSize="1em" textColor="secondary">Vanilla</Text>
              <CodePane
                style={{marginRight: '5px', marginTop: 10, height: 400}}
                lang="js"
                source={require("raw-loader!../assets/examples/hoc-text-normal.example")}
              />
            </Fill>

            <Fill>
              <Text textSize="1em" textColor="secondary">glamorous</Text>
              <CodePane
                style={{marginLeft: '5px', marginTop: 10, height: 400}}
                lang="js"
                source={require("raw-loader!../assets/examples/hoc-text-composed.example")}
              />
            </Fill>
          </Layout>
        </Slide>



        <Slide>
          <SlideTitle>Dynamic Styles</SlideTitle>
          <Layout>
            <Fill>
              <Text textSize="1em" textColor="secondary">Vanilla</Text>
              <CodePane
                style={{marginRight: '5px', marginTop: 10, height: 400}}
                lang="js"
                source={require("raw-loader!../assets/examples/dynamic-text-normal.example")}
              />
            </Fill>

            <Fill>
              <Text textSize="1em" textColor="secondary">glamorous</Text>
              <CodePane
                style={{marginLeft: '5px', marginTop: 10, height: 400}}
                lang="js"
                source={require("raw-loader!../assets/examples/dynamic-text-glamorous.example")}
              />
            </Fill>
          </Layout>
        </Slide>



        <Slide>
          <SlideTitle>Themes</SlideTitle>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/examples/theme-rule.example")}
          />
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/theme-jsx.example")}
          />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/examples/theme-glamorous.example")}
          />
        </Slide>


        <Slide>
          <SlideTitle>
            Real World Example
          </SlideTitle>
          <Image
            src={images.roomsSystemRows}
            style={{height: 600}}
          />
        </Slide>


        <Slide>
          <SlideTitle>
            Real World Example
          </SlideTitle>
          <Image
            src={images.robinGlamorous}
            style={{height: 600}}
          />
        </Slide>


        <Slide>
          <SlideTitle>
            What to look for
          </SlideTitle>
          <List>
            <ListItem>StyleSheet soup</ListItem>
            <ListItem>1-1 mappings of styles and "primitives"</ListItem>
            <ListItem>Light HOCs / "default components"</ListItem>
          </List>
        </Slide>


        <Slide>
          <SlideTitle>Getting Started</SlideTitle>
          <br />
          <Terminal
            title="1. atticoos: ~(zsh)"
            showFirstEntry={true}
            output={[
              <Typist>npm install glamorous-native --save </Typist>,
              <div style={{ color: "#33B969"}}>SUCCESS: Your just got easier!</div>
            ]}
          />
        </Slide>


        <Slide>
          <SlideTitle>Thanks!</SlideTitle>

          <List>
            <ListItem><a href="#">slides.atticoos.com/glamorous-native</a></ListItem>
            <ListItem><a href="#">github.com/robinpowered/glamorous-native</a></ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
