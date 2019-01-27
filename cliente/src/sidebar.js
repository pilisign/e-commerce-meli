import React, { Component} from 'react';
import avatar from './avatar_hat.jpg';

class Sidebar extends Component {

    render() {
        return (
            <div className="w3-third">

            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container">
                <img src={avatar} style={ { width: '100%' } } alt="Avatar"/>
                <div className="w3-display-bottomleft w3-container w3-text-black">
                  <h2>Jane Doe</h2>
                </div>
              </div>
              <div className="w3-container">
                <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p>
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p>
                <hr/>

                <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                <p>Adobe Photoshop</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div className="w3-container w3-center w3-round-xlarge w3-teal" style={ { width: '90%' } }>90%</div>
                </div>
                <p>Photography</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div className="w3-container w3-center w3-round-xlarge w3-teal" style={ { width: '80%' } }>
                    <div className="w3-center w3-text-white">80%</div>
                  </div>
                </div>
                <p>Illustrator</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div className="w3-container w3-center w3-round-xlarge w3-teal" style={ { width: '75%' } }>75%</div>
                </div>
                <p>Media</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div className="w3-container w3-center w3-round-xlarge w3-teal" style={ { width: '50%' } }>50%</div>
                </div>
                <br/>

                <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                <p>English</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-round-xlarge w3-teal" style={ { height: '24px', width: '100%' } }></div>
                </div>
                <p>Spanish</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-round-xlarge w3-teal" style={ { height: '24px', width: '55%' } }></div>
                </div>
                <p>German</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-round-xlarge w3-teal" style={ { height: '24px', width: '25%' } }></div>
                </div>
                <br/>
              </div>
            </div><br/>

          </div>
        )
    }
}

export default Sidebar;