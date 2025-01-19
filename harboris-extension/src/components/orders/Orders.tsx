import Card from "../layouts/card/Card";
import Section from "../layouts/section/Section";
import handmLogo from "../../assets/h-and-m-logo.svg";
import redShirt from "../../assets/red-shirt.png";
import greySweater from "../../assets/grey-sweater.png";
import blackDress from "../../assets/black-dress.png";
import frontDesk from "../../assets/front-desk.svg";
import mapVillage1 from "../../assets/map-village1.png";
import arrowForward from "../../assets/arrow-forward.svg";
import { Link } from "react-router";
import ecoCube from "../../assets/eco-cube.svg";
import package2 from "../../assets/package_2.svg";
import avionRewards from "../../assets/avion-rewards.png";
import loyalty from "../../assets/loyalty.svg";
import appleLogo from "../../assets/apple-logo.svg";
import airpods from "../../assets/airpods.png";
import homepod from "../../assets/homepods.png";
import airtag from "../../assets/airtag.png";

export default function Orders() {
  return (
    <>
      <Section>
        <h2
          style={{
            color: "#000",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "120%" /* 19.2px */,
            letterSpacing: "-0.16px",
            marginTop: "0px",
            marginBottom: "18px",
          }}
        >
          Recent Orders
        </h2>
        <Card>
          <div
            style={{
              width: "100%",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h3
                style={{
                  margin: "0px",
                  fontWeight: 300,
                  fontSize: "24px",
                }}
              >
                {"H&M"}
              </h3>
              <img
                src={handmLogo}
                style={{
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                  width: "26px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "36px",
            }}
          >
            <img
              src={redShirt}
              style={{
                aspectRatio: "1/1",
                width: "68px",
                borderRadius: "8px",
                boxSizing: "border-box",
                border: "1px solid var(--Style-6, #F0F0F0)",
                background: `url(${redShirt}) lightgray 50% / contain no-repeat, rgba(255, 255, 255, 0.80)`,
              }}
            />
            <img
              src={greySweater}
              style={{
                aspectRatio: "1/1",
                width: "68px",
                borderRadius: "8px",
                boxSizing: "border-box",
                border: "1px solid var(--Style-6, #F0F0F0)",
                background: `url(${greySweater}) lightgray 50% / contain no-repeat, rgba(255, 255, 255, 0.80)`,
              }}
            />
            <img
              src={blackDress}
              style={{
                aspectRatio: "1/1",
                width: "68px",
                borderRadius: "8px",
                boxSizing: "border-box",
                border: "1px solid var(--Style-6, #F0F0F0)",
                background: `url(${blackDress}) lightgray 50% / contain no-repeat, rgba(255, 255, 255, 0.80)`,
              }}
            />
            <div
              style={{
                display: "flex",
                width: "68px",
                height: "68px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "100px",
                background: "var(--Style-6, #F0F0F0)",
              }}
            >
              <p
                style={{
                  color: "#717171",
                  textAlign: "center",
                  fontFamily: "Helvetica",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "80%" /* 19.2px */,
                  letterSpacing: "-0.16px",
                  margin: 0,
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "16px",
                  }}
                >
                  +2
                </span>
                <span
                  style={{
                    fontSize: "11px",
                  }}
                >
                  more
                </span>
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              marginBottom: "36px",
            }}
          >
            <h4
              style={{
                color: "#000",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "120%" /* 19.2px */,
                margin: "0 0 12px 0",
              }}
            >
              Ships to
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#444",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    333 King Street North
                  </p>
                  <p
                    style={{
                      color: "#444",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    Waterloo ON, L6C 2A6
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "12px",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={frontDesk}
                    style={{
                      width: "26px",
                      aspectRatio: "1/1",
                      borderRadius: "50%",
                    }}
                  />
                  <p
                    style={{
                      color: "#444",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    Harbor: Front Desk
                  </p>
                </div>
              </div>
              <img
                src={mapVillage1}
                style={{
                  aspectRatio: "1/1",
                  width: "74px",
                  borderRadius: "8px",
                  border: "1px solid var(--Style-6, #F0F0F0)",
                }}
              />
            </div>
          </div>
          <Link
            to="/view-order"
            style={{
              display: "flex",
              height: "50px",
              padding: "0px 24px",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
              borderRadius: "100px",
              border: "0.5px solid #E1E1E1",
              background: "var(--White, #FFF)",
              textDecoration: "none",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                color: "#000",
              }}
            >
              View Details
            </p>
            <img
              src={arrowForward}
              style={{
                width: "20px",
                height: "20px",
              }}
            />
          </Link>
        </Card>
      </Section>
      <Section>
        <h2
          style={{
            color: "#444",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "120%" /* 19.2px */,
            letterSpacing: "-0.16px",
            marginTop: "0px",
            marginBottom: "18px",
          }}
        >
          Start a New Order
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            gap: "12px",
          }}
        >
          <Card>
            <h3
              style={{
                color: "#000",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 300,
                margin: "0 0 12px 0",
                lineHeight: "120%" /* 28.8px */,
              }}
            >
              Eco-Delivery
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "8px 0 8px 0",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      color: "#444",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    15km around 333 King Street
                  </p>
                  <p
                    style={{
                      color: "#444",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    North
                  </p>
                  <p
                    style={{
                      color: "#444",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    Waterloo, ON
                  </p>
                </div>
              </div>
              <img
                src={ecoCube}
                style={{
                  aspectRatio: "1/1",
                  width: "60px",
                  borderRadius: "8px",
                  border: "1px solid var(--Style-6, #F0F0F0)",
                }}
              />
            </div>
            <Link
              to="/delivery-range"
              style={{
                display: "flex",
                height: "50px",
                padding: "0px 24px",
                justifyContent: "center",
                gap: "12px",
                alignItems: "center",
                alignSelf: "stretch",
                borderRadius: "100px",
                border: "0.5px solid #E1E1E1",
                background: "var(--Black, #000)",
                textDecoration: "none",
                color: "var(--White, #FFF)",
              }}
            >
              <img
                src={package2}
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Delivery Range
              </p>
            </Link>
          </Card>
          <Card>
            <h3
              style={{
                color: "#000",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 300,
                margin: "0 0 12px 0",
                lineHeight: "120%" /* 28.8px */,
              }}
            >
              Avion Rewards
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "8px 0 8px 0",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      color: "#444",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    Earn points by reducing CO2.
                    <br />
                    Use points to save on shopping!
                  </p>
                </div>
              </div>
              <img
                src={avionRewards}
                style={{
                  aspectRatio: "1/1",
                  width: "60px",
                  borderRadius: "8px",
                  border: "1px solid var(--Style-6, #F0F0F0)",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "20px",
                width: "100%",
              }}
            >
              <img src={loyalty} width={20} height={20} />
              <p
                style={{
                  fontSize: "12px",
                  color: "#444",
                }}
              >
                350 pts to level 3
              </p>
            </div>
          </Card>
        </div>
      </Section>
      <Section>
        <h2
          style={{
            color: "#000",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "120%" /* 19.2px */,
            letterSpacing: "-0.16px",
            marginTop: "0px",
            marginBottom: "18px",
          }}
        >
          Previous Orders
        </h2>
        <Card>
          <div
            style={{
              width: "100%",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h3
                style={{
                  margin: "0px",
                  fontWeight: 300,
                  fontSize: "24px",
                }}
              >
                {"Apple"}
              </h3>
              <img
                src={appleLogo}
                style={{
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                  width: "26px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "36px",
            }}
          >
            <img
              src={airpods}
              style={{
                aspectRatio: "1/1",
                width: "68px",
                borderRadius: "8px",
                boxSizing: "border-box",
                border: "1px solid var(--Style-6, #F0F0F0)",
                background: `url(${airpods}) lightgray 50% / contain no-repeat, rgba(255, 255, 255, 0.80)`,
              }}
            />
            <img
              src={homepod}
              style={{
                aspectRatio: "1/1",
                width: "68px",
                borderRadius: "8px",
                boxSizing: "border-box",
                border: "1px solid var(--Style-6, #F0F0F0)",
                background: `url(${homepod}) lightgray 50% / contain no-repeat, rgba(255, 255, 255, 0.80)`,
              }}
            />
            <img
              src={airtag}
              style={{
                aspectRatio: "1/1",
                width: "68px",
                borderRadius: "8px",
                boxSizing: "border-box",
                border: "1px solid var(--Style-6, #F0F0F0)",
                background: `url(${airtag}) lightgray 50% / contain no-repeat, rgba(255, 255, 255, 0.80)`,
              }}
            />
            <div
              style={{
                display: "flex",
                width: "68px",
                height: "68px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "100px",
                background: "var(--Style-6, #F0F0F0)",
              }}
            >
              <p
                style={{
                  color: "#717171",
                  textAlign: "center",
                  fontFamily: "Helvetica",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "80%" /* 19.2px */,
                  letterSpacing: "-0.16px",
                  margin: 0,
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "16px",
                  }}
                >
                  +2
                </span>
                <span
                  style={{
                    fontSize: "11px",
                  }}
                >
                  more
                </span>
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              marginBottom: "36px",
            }}
          >
            <h4
              style={{
                color: "#000",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "120%" /* 19.2px */,
                margin: "0 0 12px 0",
              }}
            >
              Ships to
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#444",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    Student Village 1
                  </p>
                  <p
                    style={{
                      color: "#444",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    Waterloo ON, N2L 3G5
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "12px",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={frontDesk}
                    style={{
                      width: "26px",
                      aspectRatio: "1/1",
                      borderRadius: "50%",
                    }}
                  />
                  <p
                    style={{
                      color: "#444",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    Harbor: Front Desk
                  </p>
                </div>
              </div>
              <img
                src={mapVillage1}
                style={{
                  aspectRatio: "1/1",
                  width: "74px",
                  borderRadius: "8px",
                  border: "1px solid var(--Style-6, #F0F0F0)",
                }}
              />
            </div>
          </div>
          <Link
            to="/view-order"
            style={{
              display: "flex",
              height: "50px",
              padding: "0px 24px",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
              borderRadius: "100px",
              border: "0.5px solid #E1E1E1",
              background: "var(--White, #FFF)",
              textDecoration: "none",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                color: "#000",
              }}
            >
              View Details
            </p>
            <img
              src={arrowForward}
              style={{
                width: "20px",
                height: "20px",
              }}
            />
          </Link>
        </Card>
      </Section>
    </>
  );
}
