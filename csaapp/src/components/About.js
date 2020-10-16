import React from "react"

export default function About() {
  const aboutStyleText = {
    fontSize: "24px",
    display: "flex",
    textAlign: "justify",
    textJustify: "inter-word",
    marginLeft: "5vw",
    marginRight: "5vw"
  }

  return <div><br/><h2 style={{marginLeft:"3vw"}}>About</h2>
  <br/>
  <p style={aboutStyleText}>&nbsp;&nbsp;&nbsp;Since the year 2000, forest fires have burned an average of 2.3 million hectares of forest annually. These forest fires aren't always remote, and can often threaten the lives and property of thousands of Canadians. On average since 2000, forest fires have cost us nearly $4 million annually. As global climate change gets more and more severe, and forest fires become more and more dangerous, it’s becoming imperative to react swiftly and decisively as soon as possible to any sign of forest fires.</p><br/>
  <p style={aboutStyleText}>&nbsp;&nbsp;&nbsp;To this end, we’ve made an app that analyzes MOPITT data in semi-real time, along with NASA atmospheric conditions and local weather reports, to determine which locations likely have fires or are at a high risk for a future fire. We also allow users to report any incidences of out-of-control fires anonymously to us to help combat these fires before they grow too large. Finally, we report areas that are under a high risk of forest fires so that users know when they should be avoiding starting their own campfires that may accidentally spread out of their control.</p> <br/>
  <div style={{marginLeft:"3vw"}}>
  <h5>Data Sources</h5>
  <p>MOPITT Public Data: &nbsp;&nbsp;ftp://data.asc-csa.gc.ca/users/OpenData_DonneesOuvertes/pub/MOPITT/<br/>
  NASA public data:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; https://disc.gsfc.nasa.gov/datasets/FLDAS_NOAH01_C_GL_M_001/summary</p>
  </div>
  </div>;
}