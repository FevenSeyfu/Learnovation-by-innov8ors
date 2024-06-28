import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <ul className="flex flex-row justify-between">

                    <Form inline>
                        <FormControl
                            onChange={this.handleSearchInput}
                            value={this.state.searchText}
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                        <Button onClick={this.handleSearchSubmit} variant="outline-info">
                            Search
                        </Button>
                    </Form>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                    <li>
                        <Link to="/login">Log in</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
