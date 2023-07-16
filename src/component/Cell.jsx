import React from 'react'
import { useState } from 'react';

const Flight=[
  {
    src: "https://beebom.com/wp-content/uploads/2018/12/Lufthansa-Logo.jpg",
    style: {
      height: "51px",
      margin: "22px 12px"
    },
    label: "rgb(13, 28, 83)"
  },
  {
    src:
      "https://beebom.com/wp-content/uploads/2015/02/airline-logos-qatar-e1424574584611.png",
    style: {
      height: "26px",
      margin: "34px 16px"
    },
    label: "rgb(90, 5, 49)"
  },
  {
    src:
      "https://beebom.com/wp-content/uploads/2015/02/airline-logos-swiss.png",
    style: {
      height: "23px",
      margin: "41px 12px"
    },
    label: "rgb(230, 26, 56)"
  },
  {
    src:
      "https://beebom.com/wp-content/uploads/2018/12/Singapore-Airlines-logo.jpg",
    style: {
      height: "46px",
      margin: "22px 15px"
    },
    label: "rgb(252, 178, 50)"
  },
  {
    src: "https://beebom.com/wp-content/uploads/2018/12/Lufthansa-Logo.jpg",
    style: {
      height: "51px",
      margin: "22px 12px"
    },
    label: "rgb(13, 28, 83)"
  },
  {
    src:
      "https://beebom.com/wp-content/uploads/2015/02/airline-logos-qatar-e1424574584611.png",
    style: {
      height: "26px",
      margin: "34px 16px"
    },
    label: "rgb(90, 5, 49)"
  },
  {
    src:
      "https://beebom.com/wp-content/uploads/2015/02/airline-logos-swiss.png",
    style: {
      height: "23px",
      margin: "41px 12px"
    },
    label: "rgb(230, 26, 56)"
  },
  {
    src:
      "https://beebom.com/wp-content/uploads/2018/12/Singapore-Airlines-logo.jpg",
    style: {
      height: "46px",
      margin: "22px 15px"
    },
    label: "rgb(252, 178, 50)"
  } 
]

const Cell = (props)=> {
    const { index } = props;
    const [active, handleActive] = useState(false);
      
    return (
      <div
        id="cardContainer"
        style={{
          height: active ? `300px` : `100px`,
          transition: "0.9s"
        }}
        onClick={() => {
          handleActive(!active);
        }}
      >
        <div id="firstDisplay">
          <div id="flightDetail">
            <div
              id="detailLabel"
              style={{ fontWeight: "bold", color: Flight[index].label }}
            >
              From
            </div>
            BLR
            <div id="detailLabel">Kempegowda International</div>
          </div>
          <div
            id="flightDetail"
            style={{
              marginTop: "15px"
            }}
          >
            <div id="animContainer">
              <div id="anim">
                <div id="circle" />
                <div id="circle" />
                <div id="circle" />
              </div>
            </div>
            <div id="animContainer" style={{ left: "62px" }}>
              <div id="anim">
                <div id="circle" />
                <div id="circle" />
                <div id="circle" />
              </div>
            </div>
            <img
              style={{ width: "30px" }}
              src="https://github.com/pizza3/asset/blob/master/airplane2.png?raw=true"
            />
          </div>
          <div id="flightDetail">
            <div
              id="detailLabel"
              style={{ fontWeight: "bold", color: Flight[index].label }}
            >
              To
            </div>
            DEL
            <div id="detailLabel">Indira Gandhi International</div>
          </div>
        </div>
        <div
          id="first"
          style={{
            transform: active
              ? `rotate3d(1, 0, 0, -180deg)`
              : `rotate3d(1, 0, 0, 0deg)`,
            transitionDelay: active ? "0s" : "0.3s"
          }}
        >
          <div id="firstTop">
            <img style={Flight[index].style} src={Flight[index].src} />
            <div id="timecontainer">
              <div id="detailDate">
                Bengaluru
                <div id="detailTime">6:20</div>
                June 12
              </div>
              <img
                style={{
                  width: "30px",
                  height: "26px",
                  marginTop: "22px",
                  marginLeft: "16px",
                  marginRight: "16px"
                }}
                src="https://github.com/pizza3/asset/blob/master/airplane2.png?raw=true"
              />
              <div id="detailDate">
                New Delhi
                <div id="detailTime">8:45</div>
                June 12
              </div>
            </div>
          </div>
          <div id="firstBehind">
            <div id="firstBehindDisplay">
              <div id="firstBehindRow">
                <div id="detail">
                  6:20 - 8:45
                  <div id="detailLabel">Flight Time</div>
                </div>
                <div id="detail">
                  No
                  <div id="detailLabel">Transfer</div>
                </div>
              </div>
              <div id="firstBehindRow">
                <div id="detail">
                  2h 25 min
                  <div id="detailLabel">Duration</div>
                </div>
                <div id="detail">
                  8<div id="detailLabel">Gate</div>
                </div>
              </div>
              <div id="firstBehindRow">
                <div id="detail">
                  5:35
                  <div id="detailLabel">Boarding</div>
                </div>
                <div id="detail">
                  20A
                  <div id="detailLabel">Seat</div>
                </div>
              </div>
            </div>
            <div
              id="second"
              style={{
                transform: active
                  ? `rotate3d(1, 0, 0, -180deg)`
                  : `rotate3d(1, 0, 0, 0deg)`,
                transitionDelay: active ? "0.2s" : "0.2s"
              }}
            >
              <div id="secondTop" />
              <div id="secondBehind">
                <div id="secondBehindDisplay">
                  <div id="price">
                    $100
                    <div id="priceLabel">Price</div>
                  </div>
                  <div id="price">
                    Economy
                    <div id="priceLabel">Class</div>
                  </div>
                  <img
                    id="barCode"
                    src="https://github.com/pizza3/asset/blob/master/barcode.png?raw=true"
                  />
                </div>
                <div
                  id="third"
                  style={{
                    transform: active
                      ? `rotate3d(1, 0, 0, -180deg)`
                      : `rotate3d(1, 0, 0, 0deg)`,
                    transitionDelay: active ? "0.4s" : "0s"
                  }}
                >
                  <div id="thirdTop" />
                  <div id="secondBehindBottom">
                    <button
                      id="button"
                      style={{
                        color: Flight[index].label,
                        border: `1px solid ${Flight[index].label}`
                      }}
                    >
                      Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Cell