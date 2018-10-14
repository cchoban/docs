/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('docusaurus.svg')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="#see">See how it works</Button>
            <Button href="docs/">Documentation</Button>
            <Button href="/docs/install-choban">Install & Try Choban</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Choban is completely free and open source. Github repo can be found on top panel.',
        image: imgUrl('github.png'),
        imageAlign: 'top',
        title: 'Free and open source!',
      },
      {
        content: 'Choban is easy to use. No more complicated commands or gui\'\s for installation of softwares.',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Easy to use',
      },
      {
        content: 'Choban is fast because it reads plain JSON manifests that describe how to install a program and its dependencies.',
        image: imgUrl('fast.png'),
        imageAlign: 'top',
        title: 'Fast',
      },
      {
        content: 'Choban has a package creator to help you with package creation scenario.',
        image: imgUrl('tech.png'),
        imageAlign: 'top',
        title: 'Easy to create and publish packages.',
      },
      // {
      //   content: 'Choban uses Python and PowerShell together for having better support for Windows!',
      //   image: imgUrl('tech.png'),
      //   imageAlign: 'top',
      //   title: 'Powered by known technologys',
      // },
      {
        content: 'Choban listens what their users want. This makes Choban more up-to-date and user friendly application.',
        image: imgUrl('openmind.png'),
        imageAlign: 'top',
        title: 'Openmind',
      },
      {
        content: 'Choban does not publish packages from users directly instead we are inspecting every application. We also have checksum for each application.' ,
        image: imgUrl('secure.png'),
        imageAlign: 'top',
        title: 'Secure!',
      },
    ]}
  </Block>
);

const FeatureCallout = () => (
  // <div
  //   className="productShowcaseSection paddingBottom"
  //   style={{textAlign: 'center'}}>
  //   <h2>Feature Callout</h2>
  //   <MarkdownBlock>These are features of this project</MarkdownBlock>
  // </div>
  <div></div>
);

const LearnHow = () => (
  <Block id="see">
    {[
      {
        content: 'See how simple it is to install/uninstall an application.',
        image: imgUrl('how.gif'),
        imageAlign: 'right',
        title: 'Let Choban do all work for you',
      },
    ]}
  </Block>
);

const TryOut = () => (
  <Block id="try" background="dark">
    {[
      {
        content: '<a class="button" href="docs/install-choban">Download and try Choban right now.</a>' ,
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'left',
        title: 'Try Choban!',
      },
    ]}
  </Block>
);


const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          {/* <FeatureCallout /> */}
          <LearnHow />
          {/* <TryOut /> */}
          {/* <Showcase language={language} /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
