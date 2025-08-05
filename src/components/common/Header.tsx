import { Search } from "lucide-react";
import styles from "../../styles/components/Header.module.css"
import logo from "../../assets/logomazr.svg"

const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.headerContainer}>
                
                {/* Logo centrado */}
                <div className={styles.logo}>
                    <img src={logo} alt="mazr"/>
                </div>

                
                {/* Navigation menu */}
                <nav className={styles.mainNav}>
                    <a href="#" className={`${styles.navLink} ${styles.active}`}>Home</a>
                    <a href="#" className={styles.navLink}>Programming</a>
                    <a href="#" className={styles.navLink}>Neuroscience</a>
                    <a href="#" className={styles.navLink}>Physical</a>
                </nav>

                {/* Search */}
                <div className={styles.searchSection}>
                    <div className={styles.searchBox}>
                        <input 
                            type="text"
                            placeholder="SEARCH"
                            className={styles.searchInput}
                        />
                         <Search size={16} className={styles.searchIcon}/>
                    </div>
                </div>
            </div> 
        </header>
    )
}

 export default Header;
