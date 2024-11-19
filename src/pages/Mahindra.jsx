import img3 from "../assets/Mahindra thar/1.jpeg";
import img2 from "../assets/Mahindra thar/2.webp";
import img1 from "../assets/Mahindra thar/3.webp";
import img4 from "../assets/Mahindra thar/4.webp";
import img5 from "../assets/Mahindra thar/5.webp";
import img6 from "../assets/Mahindra thar/6.webp";
import img7 from "../assets/Mahindra thar/7.webp";
import { useEffect } from "react";
const Mahindra = () => {
  useEffect(() => {
    // Create link element
    const bootstrapLink = document.createElement("link");
    bootstrapLink.rel = "stylesheet";
    bootstrapLink.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    bootstrapLink.integrity =
      "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
    bootstrapLink.crossOrigin = "anonymous";

    // Append to head
    document.head.appendChild(bootstrapLink);

    // Cleanup: remove link when component is unmounted
    return () => {
      document.head.removeChild(bootstrapLink);
    };
  }, []);
  return (
    <div>
      <body className="w-screen h-full bg-black">
        <header>
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide-to="3"
                aria-current="true"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide-to="4"
                aria-current="true"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide-to="5"
                aria-current="true"
                aria-label="Slide 6"
              ></button>
            </div>
            <div className="carousel-inner carousel-img-size">
              <div className="carousel-item active" data-bs-interval="3000">
                <img src={img1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
              <div className="carousel-item">
                <img src={img4} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
              <div className="carousel-item">
                <img src={img5} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
              <div className="carousel-item">
                <img src={img6} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
              <div className="carousel-item">
                <img src={img7} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </header>

        <div
          className="row w-screen bg-black text-white"
          style={{ wordSpacing: "0.1em", lineHeight: "1.5" }}
        >
          <div className="col">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#engine"
                >
                  Engine
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#dimension">
                  Dimension
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#suspension">
                  Suspension Brakes and Wheels
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#capability">
                  Capability
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#transmission"
                >
                  Transmission
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane fade show active" id="engine">
                <h3>Engine Details</h3>
                <ul>
                  <li>
                    <h4>Engine: mHawk 130 CRDe Diesel</h4>
                    <ul>
                      <li>
                        <div className="point-box"></div>
                        <div className="point-description">
                          <p>
                            Engine Capacity (cm<sup>3</sup>): 2184
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="point-box"></div>
                        <div className="point-description">
                          <p>Max Power (kW @ r/min): 97 @ 3750</p>
                        </div>
                      </li>
                      <li>
                        <div className="point-box"></div>
                        <div className="point-description">
                          <p>Max Torque (Nm @ r/min): 300 @ 1600-2800</p>
                        </div>
                      </li>
                      <li>
                        <div className="point-box"></div>
                        <div className="point-description">
                          <p>Fuel Tank Capacity (litre): 57</p>
                        </div>
                      </li>
                      <li>
                        <div className="point-box"></div>
                        <div className="point-description">
                          <p>Diesel Exhaust Fluid Tank (litre): 20</p>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>Engine: mStallion 150 TGDi Petrol</h4>
                    <ul>
                      <li>
                        <div className="point-box"></div>
                        <div className="point-description">
                          <p>
                            Engine Capacity (cm<sup>3</sup>): 1997
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="point-box"></div>
                        <div className="point-description">
                          <p>Max Power (kW @ r/min): 112 @ 5000</p>
                        </div>
                      </li>
                      <li>
                        <div className="point-box"></div>
                        <div className="point-description">
                          <p>
                            Max Torque (Nm @ r/min): 300 @ 1250-3000 (For AX
                            Opt, LX MT); 320 @ 1500-3000 (LX AT)
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="point-box"></div>
                        <div className="point-description">
                          <p>Fuel Tank Capacity (litre): 57</p>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>Engine: D117 CRDe Diesel</h4>
                    <ul>
                      <li>
                        <div className="point-box"></div>
                        <div className="point-description">
                          <p>
                            Engine Capacity (cm<sup>3</sup>): 1497
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="point-box"></div>
                        <div className="point-description">
                          <p>Max Power (kW @ r/min): 87.2 @ 3500</p>
                        </div>
                      </li>
                      <li>
                        <div className="point-box"></div>
                        <div className="point-description">
                          <p>Max Torque (Nm @ r/min): 300 @ 1750 – 2500</p>
                        </div>
                      </li>
                      <li>
                        <div className="point-box"></div>
                        <div className="point-description">
                          <p>Fuel Tank Capacity (litre): 45</p>
                        </div>
                      </li>
                      <li>
                        <div className="point-box"></div>
                        <div className="point-description">
                          <p>Diesel Exhaust Fluid Tank (litre): 20</p>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="tab-pane fade" id="dimension">
                <h3>Dimension Details</h3>
                <ul>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Length (mm): 3985</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Width (mm): 1820</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>
                        Height (mm):1850 (AX Opt D117 CRDe),1844 (AX Opt and LX
                        mHawk 130 Hard Top),1855 (LX D117 CRDe)
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Wheelbase (mm): 2450</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Front Track (mm): 1520</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Rear Track (mm): 1520</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>
                        Seating Capacity: 4-Seater [2 + 2] (Front: 2
                        Forward-Facing, Rear: 2 Front-Facing)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-pane fade" id="suspension">
                <h3>Suspension, Brakes, and Wheels</h3>
                <ul>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>
                        Front Suspension: Independent Double Wishbone Front
                        Suspension with Coil Over Damper & Stabiliser Bar
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>
                        Rear Suspension: Multilink solid Rear Axle with Coil
                        spring & Stabiliser Bar
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>
                        Brake Specifications: Vaccum Assisted Dual Hydraulic
                        Circuit with Tandem Master Cylinder
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Front Brakes: 303 mm Disc</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Rear Brakes: 282 mm Drum</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>
                        Tyres: 245/75 R16 Tubeless All-Terrain Tyres (for AX
                        OPT), 255/65 R18 Tubeless All-Terrain Tyres (for LX)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-pane fade" id="capability">
                <h3>Capability</h3>
                <ul>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Ground Clearance (mm): 226</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Approach Angle: 41.2 degree</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Departure Angle: 36 degree</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Rampover Angle: 26.2 degree</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Water Wading Depth (mm): 650</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-pane fade" id="transmission">
                <h3>Transmission</h3>
                <h4>Engine: mHawk 130 CRDe Diesel</h4>
                <ul>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>
                        Transmission Type: 6-Speed Manual (AX Opt), 6-Speed
                        Manual / 6-Speed Torque Converter Automatic (for LX)
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>
                        Drive: Manual Shift Part-Time 4WD with High & Low
                        Reduction Gear
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Front Axle: Semi-Floating with 4.3:1 Final Drive</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Rear Axle: Banjo beam with 4.3:1 Final Drive</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Steering: Rack & Pinion Hydraulic Power Steering</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Hub Lock: Automatic</p>
                    </div>
                  </li>
                </ul>
                <h4>Engine: D117 CRDe Diesel (AX Opt & LX)</h4>
                <ul>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Transmission Type: 6-Speed Manual</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Drive: Rear Wheel Drive (RWD)</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Rear Axle: Banjo beam with 4.88:1 Final Drive</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Steering: Rack & Pinion Hydraulic Power Steering</p>
                    </div>
                  </li>
                </ul>
                <h4>Engine: mStallion 150 TGDi Petrol</h4>
                <ul>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>
                        STransmission Type: 6-Speed Manual (for AX Opt), 6-Speed
                        Manual / 6-Speed Torque Converter Automatic (for LX)
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>
                        Drive: Manual Shift Part-Time 4WD with High & Low
                        Reduction Gear (for AX Opt and LX), or Rear Wheel Drive
                        - RWD (with LX AT)
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>
                        Front Axle: Semi-Floating with 4.3:1 Final Drive for
                        4WD, NA for RWD
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Rear Axle: Banjo beam with 4.3:1 Final Drive</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Steering: Rack & Pinion Hydraulic Power Steering</p>
                    </div>
                  </li>
                  <li>
                    <div className="point-box"></div>
                    <div className="point-description">
                      <p>Hub Lock: Automatic for 4WD and NA for RWD</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Mahindra;
