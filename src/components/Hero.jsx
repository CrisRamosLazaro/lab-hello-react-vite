import Button from "./Button"

const Hero = () => {

    return (
        <div className="hero">
            <div className="main-space">
                <div className="content">
                    <h1>Say hello to ReactJS</h1>
                    <div className="text-div">
                        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                    </div>
                    <Button buttonClass="button-light" text={"Awesome"} />
                </div>
            </div>
        </div>
    )

}

export default Hero