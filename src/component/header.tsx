type HeaderProps = {
    title: string;
    tasks:number;
    id:number;
}


function Header({title,tasks,id} :HeaderProps){
    
    return(
        <header>
            <h1>{title}</h1>
            <p>{tasks}</p>
            <p>{id}</p>
        </header>
    )
}

export default Header;