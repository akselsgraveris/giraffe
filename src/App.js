import React, { useEffect } from "react";

function App() {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [receiveNotifications, setReceiveNotifications] = React.useState(
        false
    );
    const [receiveUpdates, setReceiveUpdates] = React.useState(false);

    useEffect(() => {
        // fetch("/api").then((response) =>
        //     response.json().then((data) => {
        //        ???
        //     })
        // );
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        let dataIn = JSON.parse(document.querySelector(".data-in").innerHTML);
        dataIn["first_name"] = firstName;
        dataIn["last_name"] = lastName;
        dataIn["password"] = password;
        dataIn["receive_notifications"] = receiveNotifications;
        dataIn["receive_updates"] = receiveUpdates;
        let dataOut = JSON.stringify(dataIn);

        fetch("/api/onboarding/", {
            method: "POST",
            body: dataOut,
        });
    };

    return (
        <form className="onboarding__form flex--column" onSubmit={handleSubmit}>
            <h1>Onboard</h1>
            <label className="flex--column">
                First Name:
                <input
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </label>

            <label>
                Last Name:
                <input
                    name="firstName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </label>

            <label>
                Password:
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>

            <label className="check__box">
                <input
                    name="receiveUpdates"
                    type="checkbox"
                    onChange={(e) => setReceiveNotifications(e.target.value)}
                    required
                />
                <p>Receive notifications on their project completions</p>
            </label>

            <label className="check__box">
                <input
                    name="receiveNotifications"
                    type="checkbox"
                    onChange={(e) => setReceiveUpdates(e.target.value)}
                    required
                />
                <p>Receive latest updates about our services and offers.</p>
            </label>

            <button>Submit</button>
        </form>
    );
}

export default App;
