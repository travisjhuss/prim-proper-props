function GuestList({
    guestList
}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Kid's Meal</th>
                </tr>
            </thead>
            <tbody>
                {guestList.map(guest => (
                    <tr key={guest.id}>
                        <td>{guest.name}</td>
                        <td>{String(guest.kidsMeal)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
} // end GuestList

export default GuestList;