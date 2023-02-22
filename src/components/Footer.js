import { Button } from './Button'

function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the Adventure newsletter to receive our best vacation deals!
            </p>
            <p className="footer-description-text">
                You can unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form>
                    <input className="footer-input" type="email" name="email" placeholder="Your Email" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Footer