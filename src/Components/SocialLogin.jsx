import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";


const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login with</h2>
            <div className="flex flex-col gap-2">
                <div className="btn btn-outline text-blue-600">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </div>
                <div className="btn btn-outline">
                    <FaGithub></FaGithub>
                    Login with Github
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;