import Link from 'next/link';
import styles from './Mentor.module.scss';

const Mentor = () => {
    return (
			<div className={styles.mentor}>
				<div className={styles.mentor__content}>
					<div className={styles.mentor__content_title}>
						<h3 className="title">Mentor Program</h3>
						<Link href="/mentor">
							<a className="button_link">More Details</a>
						</Link>
					</div>
                    <div className={styles.mentor__content_main}>
                        <h4>Brand new to programming?</h4>
                        <p>Schedule a FREE 1 on 1 session to get started.</p>
                        <p>Walk through the basics of web development.</p>
                        <p>Learn basic HTML, CSS, and JavaScript.</p>
                    </div>
				</div>

			</div>
		);
}

export default Mentor;
