import React, { useEffect, useState } from "react";
import { Services } from "../Config/Config";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

function About() {
  const [age, setAge] = useState("");
  const yearOfBirth = "2001";
  const getAge = () => {
    setAge(new Date().getFullYear() - yearOfBirth);
  };
  useEffect(() => {
    getAge();
  });
  return (
    <Wrapper className="about-section">
      <div className="card-inner">
        <div className="card-wrap">
          <div className="content about">
              <motion.div
              variants={fadeIn("up", 0.1, 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="title">
                <span className="first-word">About </span>
                Me
              </motion.div>
            <div className="row">
              <div className="col col-6 border-line-v">
                <motion.div
                  variants={fadeIn("up", 0.2, 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                >
                  <div className="text-box">
                    <p>
                      <b>I'm </b> 
                      Social Media Manager and Graphic/Website Designer with expertise in Digital Marketing and a background in Fashion Design. Skilled in Ads Management, SEO, SEM, Social Media Optimization, Content Creation, and Graphic Design using tools like Photoshop, Canva,Filmora,Capcut & WordPress. Experienced in collaborating with cross-functional teams and driving innovative campaigns.I bring Fun and innovations & precision to everything I do.Lets make's Yours Brand Unforgettable!.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="col col-6 border-line-v">
                <motion.div 
                 variants={fadeIn("up", 0.2, 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                className="info-list">
                  <ul>
                    <li>
                      <strong>Age: </strong>
                      {age}
                    </li>
                    <li>
                      <strong>Birthday: </strong>12 May 2001
                    </li>
                    <li>
                      <strong>Hometown: </strong>Lucknow,Uttar Pradesh
                    </li>
                    <li>
                      <strong>Gmail: </strong>rastogipragati12@gmail.com
                    </li>
                    <li>
                      <strong>Residence: </strong>Uttar Pradesh, India
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="content services">
            <motion.div 
            variants={fadeIn("up", 0.2, 1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
            className="title">
              <span className="first-word">My </span>Services
            </motion.div>
            <div className="row service-items border-line-v">
              {Services.map((val, ind) => (
                <div key={ind} className="col col-6 border-line-h">
                 
                    <motion.div
                    variants={fadeIn("up", 0.2, 1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
                     className="service-item">
                      
                      <div className="name">
                        <span>{val.name}</span>
                      </div>
                      <div className="desc">
                        <div>
                          <p>{val.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  
                </div>
              ))}
            </div>
          </div>
          <div className="content hobby">
            <motion.div
            variants={fadeIn("up", 0.2, 1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
             className="title" data-aos="fade-up">
              <span>Hobbies</span>
            </motion.div>
            <div className="row">
              <div className="col col-6 border-line-v">
                <div className="hobby-list">
                  <ul>
                    <motion.li
                    variants={fadeIn("up", 0.2, 1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
                    >
                      <strong>Painting</strong>
                    </motion.li>
                    <motion.li
                    variants={fadeIn("up", 0.3, 1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
                    >
                      <strong>Sketching</strong>
                    </motion.li>
          
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;

const Wrapper = styled.section`
  .content.about .row .col.col-6 {
    width: 100%;
    &::before {
      content: initial;
    }
    .info-list {
      padding-top: 0;

      ul {
        margin: 0;
        padding: 0;
        font-size: 0;
        list-style: none;
        overflow: hidden;

        li {
          line-height: 1.6;
          position: relative;
          text-align: right;
          padding: 0 0 5px 0;
          display: inline-block;
          vertical-align: top;
          width: 50%;
          text-align: left;
          font-size: 0.8rem;
          color: rgb(${({ theme }) => theme.title.secondary});

          &:first-child {
            padding-top: 0;
          }
        }
      }
    }
  }
  .content.hobby .row .col.col-6 {
    width: 100%;
    &::before {
      content: initial;
    }
    .hobby-list {
      padding-top: 0;

      ul {
        margin: 0;
        padding: 0;
        font-size: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li {
          line-height: 1.6;
          position: relative;
          padding: 0 5px 0px 5px;
          display: inline-block;
          vertical-align: top;
          flex-grow: 1;
          text-align: left;
          font-size: 0.89rem;
          color: rgb(${({ theme }) => theme.title.secondary});
          &:first-child {
            padding-top: 0;
          }
        }
      }
    }
  }
  .content .row {
    &::before {
      content: normal;
    }
  }
  .content.about .row .col.col-6:first-child {
    padding-bottom: 0;
  }
  .content.about .row .col.col-6:nth-child(2) {
    padding-right: 10px;
    padding-top: 15px;
  }
  @media (max-width: 1240px) {
    .content.about .row .col.col-6 .info-list ul li {
      padding-left: 0;
      padding-right: 0;
      width: 100%;
    }
  }
  .content.services .row .col.col-6 {
    .service-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .name {
        font-weight: 500;
        font-size: 1.06rem;
        color: rgb(${({ theme }) => theme.title.primary});
      }
      .icon {
        position: relative;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        border-radius: 50%;
        justify-content: center;
        background-color: ${({ theme }) => theme.highlight.primary};
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.white};
        span {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .desc {
        p {
          margin: 0;
          padding: 0;
          text-align: center;
        }
      }
    }
  }

  @media (min-width: 561px) {
    .service-items.border-line-v:after {
      margin: 0 0 0 -1px;
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      width: 1px;
      height: 100%;

      background: radial-gradient(
        ellipse at top,
        #dddddd 0%,
        rgba(255, 255, 255, 0) 70%
      );
    }
  }
`;
