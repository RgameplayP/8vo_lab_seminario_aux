import React, { type CSSProperties } from 'react';

const URL_RANDOM_AVATAR = 'https://api.minimalavatars.com/avatar/random/png';

const RandomAvatarCard: React.FC = () => {
    return (
        <div style={styles.card}>
            <h3 style={styles.title}>Random Image</h3>
            <img
                src={URL_RANDOM_AVATAR}
                alt="Random Avatar"
                style={styles.image}
            />
            <div style={styles.separator}></div>
            <div style={styles.descriptionContainer}>
                <div style={styles.descriptionTitle}>Descripcion:</div>
                <div style={styles.descriptionText}>
                    Esta es una descripcion para los personajes que aparecen de una manera aleatoria cuando se le da a recargar en la pagina.
                </div>
            </div>
        </div>
    );
};

const styles: {
    card: CSSProperties;
    title: CSSProperties;
    image: CSSProperties;
    separator: CSSProperties;
    descriptionContainer: CSSProperties;
    descriptionTitle: CSSProperties;
    descriptionText: CSSProperties;
} = {
    card: {
        width: '350px',
        height: '400px',
        border: '2px solid #000',
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0a0a0a', 
    },
    title: {
        marginBottom: '5px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '30px',
        color: '#ff70c6',
        textShadow: '5px 3px 5px #ff70c6', 
    },
    image: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '10px',
        border: '3px solid #ff70c6',
    },
    separator: {
        width: '100%',
        height: '1px',
        backgroundColor: '#ff70c6',
        marginBottom: '10px',
        marginTop: '10px',
    },
    descriptionContainer: {
        width: '100%',
        textAlign: 'left',
        paddingLeft: '10px',
        color: '#ff70c6',
    },
    descriptionTitle: {
        fontWeight: 'bold',
        marginBottom: '5px',
        color: '#ff70c6',
        fontSize: '16px',
        textShadow: '5px 3px 5px #ff70c6', 
    },
    descriptionText: {
        color: '#ff70c6',
        fontSize: '14px',
    },
};

export default RandomAvatarCard;
