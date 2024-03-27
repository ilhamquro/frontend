const Main = () => {
    return (
        <div className="content">
            <User 
            nama="Muhammad Ilham" 
            alamat="Jl Pendidikan" 
            angkatan={11} 
            hobi="Ngoding,ngopi" 
            isGraduate={false} 
            massage={() => {alert ("profil nama telah dibuka")}}/>
            <User 
            nama="Aleksis" 
            alamat="Jl Pendidikan" 
            angkatan={11} 
            hobi="Ngoding,ngopi" 
            isGraduate={false} 
            massage={() => {alert ("profil nama telah dibuka")}}/>
            <User 
            nama="HUHUHUHAHA" 
            alamat="Jl Pendidikan" 
            angkatan={11} 
            hobi="Ngoding,ngopi" 
            isGraduate={false} 
            massage={() => {alert ("profil nama telah dibuka")}}/>
        </div>
    )
}