function Home() {
  return (
    <div className="home">
      <div className="">
        <h1 className="heading1">
        We Have High <br />
        Quality NFT <br />
        Collections
        </h1>
      <p className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic ipsum aliquid ex voluptate, deserunt velit nobis officia accusamus, numquam beatae sequi labore omnis rerum fugiat quis nemo iste repellat.
      </p>
      <button className="btn1">Get Whitelist</button>
      <button className="btn2">Contact Us</button>
      <div className="did">
        <div style={{color:"white"}}>
            <p>240k+</p>
             <p>Total Sale</p>
        </div>
        <div  style={{marginLeft:"20px",color:"white"}}>
            <p>100k+</p>
             <p>Auctions</p>
        </div>
        <div style={{marginLeft:"20px",color:"white"}}>
            <p>240k+</p>
             <p>Artists</p>
        </div>
      </div>
      </div>
      <div className="">
        <img className="img1" src="src/assets/img/burger1.png" alt="" />
      </div>
    </div>
  )
}

export default Home
