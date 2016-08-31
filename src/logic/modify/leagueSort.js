import {PrimaryLeagueSortOption, SecondaryLeagueSortOption, PrimaryLeagueSortDirection} from '../data/config';

function Sort(name, value, sort, isPrimary, isSecondary) {
	let self = this;
	self.name = name;
	self.value = value;
	self.sort = sort;
	self.isPrimary = PrimaryLeagueSortOption === self.value || PrimaryLeagueSortDirection === self.value;
	self.isSecondary = SecondaryLeagueSortOption === self.value;
}

const sortDirections = [new Sort('Asc', 'Asc', true),
	new Sort('Desc', 'Desc', false)];

const sortOptions = [new Sort('Pts', 'Pts', (left, right) => {
		return left.points - right.points;
	}),
	new Sort('Name', 'Name', (left, right) => {
		if (left.name.toLowerCase() < right.name.toLowerCase()) {
			return 1;
		} else if (left.name.toLowerCase() > right.name.toLowerCase()) {
			return -1;
		} else {
			return 0;
		}
	}),
	new Sort('Played', 'Played', (left, right) => {
		return left.played - right.played;
	}),
	new Sort('Bonus', 'Bonus', (left, right) => {
		return left.bonus - right.bonus;
	}),
	new Sort('Won', 'Won', (left, right) => {
		return left.won - right.won;
	}),
	new Sort('Drew', 'Drew', (left, right) => {
		return left.drew - right.drew;
	}),
	new Sort('Lost', 'Lost', (left, right) => {
		return left.lost - right.lost;
	}),
	new Sort('Frames Won', 'Frames Won', (left, right) => {
		return left.framesWon - right.framesWon;
	}),
	new Sort('Frames Lost', 'Frames Lost', (left, right) => {
		return left.framesLost - right.framesLost;
	}),
	new Sort('Frames Difference', 'Frames Difference', (left, right) => {
		return left.frameDifference - right.frameDifference;
	})
];

export default {
	directions: sortDirections,
	options: sortOptions
};