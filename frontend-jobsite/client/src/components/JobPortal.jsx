import React from 'react';
import styled from 'styled-components';
import { get } from '../../http';

import SearchBar from './SeekerSearchSubComponents/Searchbar.jsx';
import Location from './SeekerSearchSubComponents/Location.jsx';
import Filters from './SeekerSearchSubComponents/Filters.jsx';
import ListJobResults from './SeekerSearchSubComponents/ListJobResults.jsx';
import ListingDetailDiv from './SeekerSearchSubComponents/ListingDetailDiv.jsx';
import ListingDetailModal from './SeekerSearchSubComponents/ListingDetailModal.jsx';
import schema from './constants.jsx';

const PageWrapper = styled.div`
  margin: 0;
  width: 100vw;
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavButtonDiv = schema.navButtonDiv;
const NavButton = schema.navButton;

const SearchWrapper = styled.div`
  width: 100%;
  height: 16vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
    height: 8vh;
  }
`;

const JobResultsPortalWrapper = styled.div`
  width: 95%;
  height: 77vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    height: 80vh;
  }
`;
const ModalBackground = schema.modalBackground;

class JobPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seekerId: '606d2039fa660c4ce0b471fd',
      isDesktop: false,
      search: '',
      location: '',
      filters: {},
      jobResults: [],
      jobToDisplay: null,
      searchedJobs: null,
    };
    this.updateScreenSize = this.updateScreenSize.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.getJobToDisplay = this.getJobToDisplay.bind(this);
    this.getJobListings = this.getJobListings.bind(this);
    this.getSearchedJobs = this.getSearchedJobs.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.setFilters = this.setFilters.bind(this);
  }

  componentDidMount() {
    // send GET Request for data and assign to jobResults
    this.updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize);
    this.getJobListings();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenSize);
  }

  getJobListings() {
    // const { filters:
    //   { employment, experience, locationType, salary, datePosted, locationRange }
    // } = this.state;

    // const params = ``;

    get('api/listing/all')
      .then((data) => this.setState({ jobResults: data }))
      .catch((e) => console.log(e));
  }

  getJobToDisplay(job) {
    this.setState({ jobToDisplay: job });
  }

  getSearchedJobs(searchedJobs) {
    this.setState({ searchedJobs });
  }

  setSearch(term) {
    this.setState({search: term});
  }

  setLocation(term) {
    this.setState({ location: term });
  }

  setFilters(filters) {
    this.setState({ filters });
  }

  toggleModal() {
    this.setState((prevState) => ({
      modalOpen: !prevState.modalOpen,
    }));
  }

  updateScreenSize() {
    this.setState({ isDesktop: window.innerWidth >= 768 });
  }

  render() {
    const {
      seekerId, isDesktop, modalOpen, jobResults, jobToDisplay, searchedJobs,
    } = this.state;
    const { seekerData } = this.props;

    return (
      <PageWrapper>
        <NavButtonDiv>
          <NavButton href={`${window.location.origin}/#/seeker`}>PROFILE</NavButton>
          <NavButton href={`${window.location.origin}/#/jobs`}>JOBS</NavButton>
        </NavButtonDiv>
        <SearchWrapper>
          <SearchBar getSearchedJobs={this.getSearchedJobs} setSearch={this.setSearch} />
          <Location setLocation={this.setLocation} />
          <Filters setFilters={this.setFilters} />
        </SearchWrapper>
        <JobResultsPortalWrapper>
          {searchedJobs && (
          <ListJobResults
            jobResults={searchedJobs}
            toggleModal={this.toggleModal}
            getJobToDisplay={this.getJobToDisplay}
          />
          )}
          {!searchedJobs && (
          <ListJobResults
            jobResults={jobResults}
            toggleModal={this.toggleModal}
            getJobToDisplay={this.getJobToDisplay}
          />
          )}
          { isDesktop
          && (
          <ListingDetailDiv
            toggleModal={this.toggleModal}
            seekerId={seekerData.seekerId}
            jobToDisplay={jobToDisplay}
          />
          ) }
          { !isDesktop && modalOpen && (
            <ModalBackground onMouseDown={this.toggleModal}>
              <ListingDetailModal
                toggleModal={this.toggleModal}
                jobToDisplay={jobToDisplay}
                seekerId={seekerData.seekerId}
              />
            </ModalBackground>
          )}
        </JobResultsPortalWrapper>
      </PageWrapper>
    );
  }
}

export default JobPortal;
