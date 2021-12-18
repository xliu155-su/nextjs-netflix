import Col from '../../components/col'
import Layout from '../../components/layout'
import Row from '../../components/row'
import StoryArt from '../../components/storyart'

import { getAllMovieSlugs, getMovieBySlug } from '../../lib/api'

// Waterfall template
export async function getStaticPaths() {
	const movieSlugs = await getAllMovieSlugs()

	const paths = movieSlugs.edges.map(edge => {
		const { slug } = edge.node
		return {
			params: {
				id: slug
			}
		}
	})
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const movieData = await getMovieBySlug(params.id)

	return {
		props : {
		     movieData
		}
	}
}

const singleMovie = ( { movieData }) => {
    const { title, featuredImage, titleInformation, genres} = movieData
	const { duration, year, youtubeUrl, storyArt, storyLogo } = titleInformation
    return <Layout>
		{storyArt &&
			<StoryArt storyArt={storyArt} youtubeUrl={youtubeUrl} />
		}
		<Row>
			<Col xs="12" sm="12" md="6" >
				Title and meta information
			</Col>
			<Col xs="12" sm="12" md="6">
				Genres
			</Col>
		</Row>
    </Layout>
}
export default singleMovie