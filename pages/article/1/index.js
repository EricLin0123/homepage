import Header from "../header";
import Footer from "../footer";
import React from "react";

function Article() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="PageFlexBox flex flex-col px-10">
        <div className="Title text-2xl py-5">
          Some PCB layout tips for ESD Protection
        </div>
        <div className="Title text-xl py-5">What is ESD?</div>
        <hr></hr>
        <div className="content text-base">
          <p>
            ESD stands for &quot; ElectroStatic Discharge &quot;. In
            electronics, ESD can generate a very high voltage (generally {">"}{" "}
            500V) and moderate peak current (~1A to 10A) that occurs in a short
            time frame. It comes into play when two conductive objects approach
            each other and form a strong electric field, which can cause a
            field-induced breakdown. An arc can occur when the voltage between
            the objects exceeds the breakdown voltage of the air or the
            insulation between them. In environments where the relative humidity
            is very low, an ESD event may have a peak voltage as high as 15,000
            volts. The arc continues until the objects touch, shorting out the
            arc, or until the voltage drops too low to sustain the arc.
          </p>
          <br></br>
          <p>
            To tackle the surge voltage induce by ESD we can connect
            &quot;Transient Voltage Suppressor&quot; or TVS to the circuit.
          </p>
        </div>
        <div className="Title text-xl pt-10 pb-5">
          Transient Voltage Suppressor
        </div>
        <hr></hr>
        <p>
          TVS diodes are used to protect semiconductor components from
          high-voltage transients. They are placed in front of the components
          that need protection and act as a &quot;steering diode &quot; to shunt
          the current when the voltage exceeds the breakdown voltage. TVS diodes
          are designed to handle large amounts of power in a very short time.
          They can be used to protect against ESD, lightning, and other
          high-voltage transients. TVS diodes are used in a variety of
          applications, including automotive, industrial, and consumer
          electronics. They are also used in power supplies, telecommunications
          equipment, and other electronic devices.
          <br></br>
          <br></br>
          Here is a simple TVS diode circuit for DC applications:
        </p>
        <div className="flex flex-row h-80 w-full">
          <img
            className="basis-1/2 object-contain"
            src="https://res.cloudinary.com/rspoc/image/upload/f_auto/q_auto/v1673455819/RS%20CONTENTFUL/Discovery/Other%20image%20assets/tvs_diodes.jpg"
            alt="TVS circuit"
          />
          <img
            className="basis-1/2 shrink object-contain"
            src="https://www.shindengen.com/products/semi/column/files/images/tvs01_1.png"
          />
        </div>
        <br></br>
        <p>
          If we add some steering diodes to it, we can make it bidirectional
          making it capable of suppressing ESD of both polarity as shown below.
        </p>
        <img
          className="h-80 object-contain"
          src="\article\1\bidirectionalTVS.png"
        ></img>

        <div className="text-xl">Sources</div>
        <div className="reference flex flex-col">
          <a href="https://www.ti.com/lit/pdf/slva680">
            Guy Yater. (2015, February). ESD protection layout guide (rev. A).
          </a>
          <a href="https://eeseal.com/resources/informational-content/electrostatic-discharge-an-overview/#1">
            Quell Corporation. Electrostatic Discharge: An Overview
          </a>
          <a href="https://emcfastpass.com/wp-content/uploads/2017/04/ta1002.pdf">
            Ivan G. Lawson @ ProTek Devices. (2011) Understanding Steering Diode
            Arrays
          </a>
          <a href="https://www.ti.com/lit/pdf/slyy03https://uk.rs-online.com/web/content/discovery/ideas-and-advice/tvs-diodes-guide6">
            RS Components Ltd. (Jan 2023) Everything You Need to Know About TVS
            Diodes
          </a>
          <a href="https://www.shindengen.com/products/semi/column/basic/diodes/tvs.html">
            SHINDENGEN ELECTRIC MANUFACTURING CO. What are TVS Diodes?
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Article;
