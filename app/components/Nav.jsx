var React = require('react');
var {Link, IndexLink} = require('react-router');
var Nav = React.createClass({
    render: function() {
      return(
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className='menu-text'>React Boilerplate</li>
          <li>
            <IndexLink to="/" activeClassName='active-link'>FirstLink</IndexLink>
          </li>
          <li>
            <Link to='/link' activeClassName='active-link'>SecondLink</Link>
          </li>
        </ul>
      </div>
      <div className='top-bar-right'>
        <ul className='menu'>
          <li className='menu-text'>
            Created by <a href="http://www.github.com/bartoszbinda" target='_blank' ref='nnoopener norefferer'>Bartosz Binda</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
});
module.exports = Nav;
