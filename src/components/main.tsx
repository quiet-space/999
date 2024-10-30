import Weather from "./weather/weather";

const Main = () => {
    const publicKey: (string | undefined) =  process.env.REACT_APP_PUBLIC_API_KEY_ENCODED


    return <div>
            <Weather />
        </div>
}

export default Main;
