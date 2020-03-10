import React, { Component } from 'react';
import SectionHeader from '../common/SectionHeader';
import SectionBody from '../common/SectionBody';
import image from '../../img/create-section1.jpg';

export default class Create extends Component {
  render() {
    return (
      <div id="create-section">
        <section id="create-head-section" className="bg-primary">
          <SectionHeader
            header="Create"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore autem quis itaque consequuntur sed tempore nobis fuga enim velit!"
            btnContent="Find Out More"
            btnLight={true}
          />
        </section>
        <section id="create-body-section" className="py-5">
          <SectionBody
            image={image}
            header="Create Your Passion"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque perferendis veritatis itaque numquam at, porro ea totam dolores omnis!"
            check1="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Animi corrupti perspiciatis explicabo accusantium itaque!
            Sint culpa cumque debitis rerum quia."
            check2="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Animi corrupti perspiciatis explicabo accusantium itaque!
            Sint culpa cumque debitis rerum quia."
            positionLeft={false}
          />
        </section>
      </div>
    );
  }
}
