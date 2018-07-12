import React from 'react';
import { render } from 'react-dom';
import {
  Deck,
  Slide,
  Notes,
  Heading,
  Magic,
  Anim,
  Link,
  Text,
  BlockQuote,
  Quote,
  Cite,
  Appear,
  Code,
  Image,
  List,
  ListItem
} from 'spectacle';
import REPL from './repl/repl';
import createTheme from 'spectacle/lib/themes/default';
const fs = require('fs');

const theme = createTheme(
  {
    primary: '#333',
    secondary: '#FFF',
    tertiary: 'hsl(209,100%,60%)',
    quarternary: '#FFF'
  },
  {
    primary: 'sans-serif'
  }
);

const defaultSlideProps = {
  align: 'center center',
  className: 'default-slide'
};

const AppearingBlock = props => (
  <Appear {...props}>
    <div>{props.children}</div>
  </Appear>
);

function Presentation() {
  return (
    <Deck theme={theme} transition={[]} progress="none" controls={false}>
      <Slide {...defaultSlideProps}>
        <Heading caps fit size={1}>
          Concate-what?
        </Heading>
        <Text fit>
          Adventures in weird programming for the discerning JavaScripter
        </Text>
        <br />
        <Text>Stian Veum Møllersen / @mollerse</Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Hello 👋</Text>
        <Appear>
          <Text>I'm Stian 🇳🇴</Text>
        </Appear>
        <Notes>
          Hello everyone! My name is Stian. It's completely OK if you cant
          pronounce that.
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>I do web things✨</Text>
        <Appear>
          <Text>And I'm super fascinated by language🗣</Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Appear>
          <Text>Programming is communication🗣</Text>
        </Appear>
        <Appear>
          <Text>
            Exploring different programming languages can give you more ways to
            communicate👨‍🏫
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text className="flip">🚟 🚟 🚟 🚟 🚟</Text>
        <Text fit>Concatenative Programming</Text>
        <Text>🚟 🚟 🚟 🚟 🚟</Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Concatenative Languages have been around since the 70s👩‍🎤</Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <List>
          <ListItem>
            <Text>➡ Forth</Text>
          </ListItem>
          <ListItem>
            <Appear>
              <Text>➡ PostScript</Text>
            </Appear>
          </ListItem>
          <ListItem>
            <Appear>
              <Text>➡ Joy</Text>
            </Appear>
          </ListItem>
          <ListItem>
            <Appear>
              <Text>➡ Factor</Text>
            </Appear>
          </ListItem>
          <ListItem>
            <Appear>
              <Text>➡ Ait</Text>
            </Appear>
          </ListItem>
        </List>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>
          <Code>9 succ 5 mod 0 equal</Code>
        </Text>
        <AppearingBlock>
          <Text>⬇️</Text>
          <Text>
            <Code>9 |> succ |> 5 |> mod |> 0 |> equal</Code>
          </Text>
        </AppearingBlock>
        <AppearingBlock>
          <Text>⬇️</Text>
          <Text>
            <Code>equal(0(mod(5(succ(9())))</Code>
          </Text>
        </AppearingBlock>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Everything is functions.</Text>
        <Appear>
          <Text>
            Bigger functions are built from smaller functions using composition.
          </Text>
        </Appear>
        <Appear>
          <Text>🤯</Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>
          <Code>9 succ 5 mod 0 equal</Code>
        </Text>
        <Appear>
          <Text>How does this even work? 🧙‍♂️</Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>
          All functions are <Code>state => state</Code>
        </Text>
        <Appear>
          <Text>This enables implicit composition🤓</Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>The state of your program is a stack🥞</Text>
        <Appear>
          <Text>Functions pop values off🍽</Text>
        </Appear>
        <Appear>
          <Text>...and push results on👨‍🍳</Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} className="repl-slide">
        <REPL
          mode="stack"
          code={fs.readFileSync('./code/example.ait', 'utf8')}
        />
      </Slide>

      <Slide {...defaultSlideProps} className="repl-slide">
        <REPL
          mode="canvas"
          code={fs.readFileSync('code/triangle-done.ait', 'utf8')}
        />
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>That was a superquick intro to ✨Concatenative Languages✨</Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>
          Concatenative Programming has some really interesting attributes🕵️‍♂️
        </Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>How has it affected my approach to programming in JS?</Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>
          <Code>add5: 5 + ;</Code>
        </Text>
        <AppearingBlock>
          <Text>⬇️</Text>
          <Text>
            <Code>let add5 = add.bind(null, 5)</Code>
          </Text>
        </AppearingBlock>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text fit>
          <Code>function sub(a, b)&lbrace; return a - b; &rbrace;</Code>
        </Text>
        <AppearingBlock>
          <Text>⬇️</Text>
          <Text>
            <Code>let sub5 = sub.bind(null, 5)</Code>
          </Text>
        </AppearingBlock>
        <Appear>
          <Text>😞</Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text fit>
          <Code>function sub(b, a)&lbrace; return a - b; &rbrace;</Code>
        </Text>
        <AppearingBlock>
          <Text>⬇️</Text>
          <Text>
            <Code>let sub5 = sub.bind(null, 5)</Code>
          </Text>
        </AppearingBlock>
        <Appear>
          <Text>😀</Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>
          <Code>(x, y) => y*y - Math.abs(y) + x*x</Code>
        </Text>
        <AppearingBlock>
          <Text>⬇️</Text>
          <Text>
            <Code>dup square swap abs - swap square +</Code>
          </Text>
        </AppearingBlock>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>
          <Code>(x, y) => y*y - Math.abs(y) + x*x</Code>
        </Text>
        <AppearingBlock>
          <Text>⬇️</Text>
          <Text>
            <Code>calcY(9) + calcX(10)</Code>
          </Text>
        </AppearingBlock>
        <AppearingBlock>
          <Text>⬇️</Text>
          <Text>
            <Code>9 calcY 10 calcX +</Code>
          </Text>
        </AppearingBlock>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Naming things is ✨awesome✨</Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>When naming is your only abstraction✍️</Text>
        <Appear>
          <Text>It becomes all about naming things👨‍🎨</Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Thinking Forth (1984)</Text>
        <Image width="35%" src="assets/thinking_forth.JPG" />
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>
          This isn't really a talk to convince you to go try a Concatenative
          Language🤔
        </Text>
        <Text className="small-text">
          (allthough it would be totally ✨awesome✨ with more people to nerd
          out with)
        </Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>
          Strange and unfamiliar languages offer opportunities for learning👨‍🏫
        </Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>
          Without your favorite tools and techniques you approach things
          differently📐
        </Text>
        <Appear>
          <Text>
            But you come back more knowledgeable and with more tools and
            techniques🤹‍♂️
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Slides & Stuff:</Text>
        <Text fit>
          <a href="https://github.com/mollerse/concate-what-scotlandjs-presentation">
            github/mollerse/concate-what-scotlandjs-presentation
          </a>
        </Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Further reading</Text>
        <Text className="small-text">
          (Should you want to explore Concatenative Languages)
        </Text>
        <List>
          <ListItem>
            <Link href="http://www.kevinalbrecht.com/code/joy-mirror/joy.html">
              Joy Homepage (mirror)
            </Link>
          </ListItem>
          <ListItem>
            <Link href="http://factorcode.org/">Factor Language</Link>
          </ListItem>
          <ListItem>
            <Link href="http://unusual.place/">Ait Language</Link>
          </ListItem>
          <ListItem>
            <Link href="http://thinking-forth.sourceforge.net/">
              Thinking Forth
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://leanpub.com/readevalprintlove003/read">
              Read Eval Print λove #3 - Michael Fogus
            </Link>
          </ListItem>
          <ListItem>
            <Link href="http://archive.vector.org.uk/art10000350">
              A Conversation with Manfred von Thun
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.forth.com/resources/forth-programming-language/">
              The Evolution of Forth
            </Link>
          </ListItem>
          <ListItem>
            <Link href="http://www.codecommit.com/blog/cat/the-joy-of-concatenative-languages-part-1">
              The Joy of Concatenative Languages
            </Link>
          </ListItem>
          <ListItem>
            <Link href="http://evincarofautumn.blogspot.co.uk/2012/02/why-concatenative-programming-matters.html">
              Why Concatenative Programming Matters
            </Link>
          </ListItem>
        </List>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Heading caps size={1}>
          Thank you for listening
        </Heading>
        <Text>Stian Veum Møllersen / @mollerse</Text>
      </Slide>
    </Deck>
  );
}
const mount = document.createElement('div');
document.body.appendChild(mount);
render(<Presentation />, mount);
