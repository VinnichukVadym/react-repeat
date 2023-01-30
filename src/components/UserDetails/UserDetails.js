const UserDetails = ({user: {id, name, username, email, phone, website,
                             address: {street, suite, city, zipcode, geo: {lat, lng}},
                             company: {name: companyName, catchPhrase, bs}}}) => {

    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
            <div>Website: {website}</div>
            <div>Address:
                <div>Street: {street}</div>
                <div>Suite: {suite}</div>
                <div>City: {city}</div>
                <div>Zipcode: {zipcode}</div>
                <div>Geo:
                    <div>Lat{lat}</div>
                    <div>Lng{lng}</div>
                </div>
                <div>Company:
                    <div>Name: {companyName}</div>
                    <div>Catch Phrase: {catchPhrase}</div>
                    <div>Bs: {bs}</div>
                </div>
            </div>
        </div>
    );
};

export {
    UserDetails
}