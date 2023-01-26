import '../../utils/style/Error.css';

function Error() {
    return (
        <div className='Error-page'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/">Retourner sur la page d’accueil</a>
        </div>
    )
}
 
export default Error