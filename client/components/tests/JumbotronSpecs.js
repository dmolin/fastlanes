const {describe, it} = global;
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import Jumbotron from '../Jumbotron';
import sinon from 'sinon';

describe('jumbotron.components.Jumbotron', () => {
  it('should exist', () => {
    const el = shallow(<Jumbotron projects={[]} />);
    //expect(el.find('p')).to.be.match(/This is where the items will go/);
    expect(el.find('section.jumbotron').length).to.equal(1);
  });

  it('should display the projects in the jumbotron', () => {
    const projects = [_buildProject()]
    const el = shallow(<Jumbotron projects={projects} />)
    expect(el.find('.jumbotron-item').length).to.equal(1)
  })

  it('should set the slide background to the project.imageBg value', () => {
    const projects = [_buildProject()]
    const el = shallow(<Jumbotron projects={projects} />)

    const project = el.find('.jumbotron-item').node
    expect(project.props.style.background).to.be.match(/url(.*bgImageUrl).*/)
  })

  it('should set the slide foreground image to the project.imageBg value', () => {
    const projects = [_buildProject()]
    const el = shallow(<Jumbotron projects={projects} />)

    const image = el.find('.jumbotron-image').node
    expect(image.props.style.background).to.be.match(/url(.*fgImageUrl).*/)
  })

  it('should preload the background of the current active slide and the following one', () => {
    function checkPreload(nodes, currentIndex) {
      // console.log(Array.prototype.map.call(nodes, (n) => (
      //   n.props.style
      // )))
      expect(nodes[currentIndex].props.style.background).to.be.match(/url(.*bgImageUrl).*/)
      if(nodes.length > currentIndex+1)
        expect(nodes[currentIndex+1].props.style.background).to.be.match(/url(.*bgImageUrl).*/)
      if(nodes.length > currentIndex+2)
        expect(nodes[currentIndex+2].props.style.background).to.equal('none')
    }

    const projects = [_buildProject(1), _buildProject(2), _buildProject(3), _buildProject(4)]
    let el = shallow(<Jumbotron projects={projects} currentIndex={0} />)
    checkPreload(el.find('.jumbotron-item').nodes, 0)

    let el2 = shallow(<Jumbotron projects={projects} currentIndex={0} highestIndex={1} />)
    checkPreload(el2.find('.jumbotron-item').nodes, 1)
  })

  it('should use the current active item for the jumbotron background color', () => {
    const projects = [_buildProject(1), _buildProject(2), _buildProject(3), _buildProject(4)]
    let el = shallow(<Jumbotron projects={projects} currentIndex={2} />)

    //check that the background color is the one set for the project at index=2
    expect(el.find('.jumbotron').node.props.style.backgroundColor).to.equal('bgColorCode3')
  })

});

function _buildProject(suffix) {
  suffix = suffix || ''
  return {
    _id: 1,
    imageFg:'fgImageUrl' + suffix,
    imageBg:'bgImageUrl' + suffix,
    bgColor:'bgColorCode' + suffix,
    fgSize:'fgSizeRatio' + suffix
  }
}