function Profile () {
    const image = './src/assets/image1.jpg';
    const handClick = () => console.log("Fuck")
    return(
        <img onClick src={image}></img>
    )
}

export default Profile;