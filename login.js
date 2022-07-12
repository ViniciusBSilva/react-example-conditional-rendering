function UserGreeting(props) {
    return (
        <h1>Welcome back!</h1>
    );
}

function GuestGreeting(props) {
    return (
        <h1>Please sign up.</h1>
    );
}

function Greeting(props) {
    return (
        props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
    );
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

// Stateful component
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        const button = isLoggedIn ?
            <LogoutButton onClick={this.handleLogoutClick} />
            :
            <LoginButton onClick={this.handleLoginClick} />;

        return (
            <>
                <Greeting isLoggedIn={isLoggedIn} /> {button}
            </>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <LoginControl />
);