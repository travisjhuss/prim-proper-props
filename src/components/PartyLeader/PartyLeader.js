function PartyLeader({leader}) {
    console.log(leader);
    
    return (
        <>
            <h2>Party Leader</h2>
            {leader && <h3>{leader.name}</h3>}
        </>
    )
} // end PartyLeader

export default PartyLeader;