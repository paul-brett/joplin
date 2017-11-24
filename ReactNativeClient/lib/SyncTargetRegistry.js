class SyncTargetRegistry {

	static classById(syncTargetId) {
		const info = SyncTargetRegistry.reg_[syncTargetId];
		if (!info) throw new Error('Invalid id: ' + syncTargetId);
		return info.classRef;
	}

	static addClass(SyncTargetClass) {
		this.reg_[SyncTargetClass.id()] = {
			id: SyncTargetClass.id(),
			name: SyncTargetClass.targetName(),
			label: SyncTargetClass.label(),
			classRef: SyncTargetClass,
		};
	}

	static nameToId(name) {
		console.info(this.reg_);

		for (let n in this.reg_) {
			if (!this.reg_.hasOwnProperty(n)) continue;
			if (this.reg_[n].name === name) return this.reg_[n].id;
		}
		throw new Error('Name not found: ' + name);
	}

	static idAndLabelPlainObject() {
		let output = {};
		for (let n in this.reg_) {
			if (!this.reg_.hasOwnProperty(n)) continue;
			output[n] = this.reg_[n].label;
		}
		return output;
	}

}

SyncTargetRegistry.reg_ = {};

module.exports = SyncTargetRegistry;