import React from 'react';

import './styles.scss';
import nodelogo from 'src/assets/images/node.png';

const Formation = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-4 bord"> <div className="titlea">A propos</div>
        <div className="row-formation"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rerum id adipisci vitae provident fugit eos qui ad ipsa, inventore molestiae facilis libero magni quibusdam debitis laboriosam. Aliquid sint fugit ipsam molestiae praesentium expedita. Magnam, temporibus optio quas quod harum rem voluptatibus repellendus molestiae, distinctio molestias esse eaque tenetur corrupti!</div>
        <div className="titlea">My Formation</div>
        <div className="row-formation">
          <div className="formation-contenu">2020 - 2021 Oclock <div>Diplome</div></div>
          <div className="formation-contenu">2020 - 2021 Oclock <div>Diplome</div></div>
          <div className="formation-contenu">2020 - 2021 Oclock <div>Diplome</div></div>
          <div className="formation-contenu">2020 - 2021 Oclock</div>
        </div>
      </div>
      <div className="col-8 bordure">
        <center>
          <div id="SkillBox">
            <center><p>My Skills</p></center>
            {/* <img src="https://2.bp.blogspot.com/--aPlnH6X1YA/UEf7yeJ3gGI/AAAAAAAATgw/TgMK9IVzipk/s1600/Skills%2B-%2BPawan%2BMall.png" alt="Skill - Pawan Mall" /> */}
            <div className="SkillBar">
              <div id="Skill-HTML">
                <span className="Skill-Area ">HTML</span>
                <span className="PercentText ">100%</span>
              </div>
            </div>

            <div className="SkillBar">
              <div id="Skill-CSS">
                <span className="Skill-Area ">CSS/CSS3</span>
                <span className="PercentText ">70%</span>
              </div>
            </div>

            <div className="SkillBar">
              
              <div id="Skill-jQuery">
                
                <span className="Skill-Area ">jQuery</span>
                <span className="PercentText ">40%</span>
              </div>
            </div>

            <div className="SkillBar">
              <div id="Skill-JS">
                <span className="Skill-Area ">Javascript</span>
                <span className="PercentText ">65%</span>
              </div>
            </div>

            <div className="SkillBar">
              <div id="Skill-XML">
                <span className="Skill-Area ">XML </span>
                <span className="PercentText ">40%</span>
              </div>
            </div>

            <div className="SkillBar">
              <div id="Skill-C">
                <span className="Skill-Area ">C</span>
                <span className="PercentText ">30%</span>
              </div>
            </div>

            <div className="SkillBar">
              <div id="Skill-JAVA">
                <span className="Skill-Area ">JAVA </span>
                <span className="PercentText ">25%</span>
              </div>
            </div>

            <div className="SkillBar">
              <div id="Skill-PHP">
                <span className="Skill-Area ">PHP </span>
                <span className="PercentText ">50%</span>
              </div>
            </div>

            <div className="SkillBar">
              <div id="Skill-SQL">
                <span className="Skill-Area ">SQL </span>
                <span className="PercentText ">80%</span>
              </div>
            </div>

          </div>
        </center>

      </div>
    </div>
  </div>
);

export default Formation;
